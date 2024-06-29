import React from 'react'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import "./MyGigs.scss"
import { Link } from 'react-router-dom'

const MyGigs = () => {

  const currentUser = JSON.parse(localStorage.getItem("currentUser"))

  const queryClient = useQueryClient()
  const { isLoading, error, data } = useQuery({
    queryKey: ["mygigs"],
    queryFn: () =>
      newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.post(`/gigs/${id}`, review);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["mygigs"])
    }
  });

  const handledelete = (id) => {
    mutation.mutate(id);
    e.target[0].value = "";
  };

  return (
    <div className='myGigs'>
      {isLoading ? "loading" : error ? "something went wrong" : <div className="container">
        <div className="title">
          <h1>Gigs</h1>
          {currentUser.isSeller && (<Link to="/add">
            <button>
              Add New Gig
            </button>
          </Link>)}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          {data.map((gig) => (
            <tr key={gig._id}>
              <td>
                <img src={gig.cover} alt="" className='img' />
              </td>
              <td>{gig.title}</td>
              <td>{gig.price}</td>
              <td>{gig.sales}</td>
              <td>
                <img src="./../img/delete.png" alt="" className='delete' onClick={()=>handledelete(gig._id)} />
              </td>
            </tr>
          ))
          }
        </table>

      </div>}
    </div>
  )
}

export default MyGigs