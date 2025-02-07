// import React from 'react'
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import newRequest from "../../utils/newRequest";
// import "./MyGigs.scss"
// import { Link } from 'react-router-dom'

// const MyGigs = () => {

//   const currentUser = JSON.parse(localStorage.getItem("currentUser"))

//   const queryClient = useQueryClient()
//   const { isLoading, error, data } = useQuery({
//     queryKey: ["mygigs"],
//     queryFn: () =>
//       newRequest.get(`/gigs?userId=${currentUser.id}`).then((res) => {
//         return res.data;
//       }),
//   });

//   const mutation = useMutation({
//     mutationFn: (id) => {
//       return newRequest.post(`/gigs/${id}`, review);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries(["mygigs"])
//     }
//   });

//   const handledelete = (id) => {
//     mutation.mutate(id);
//     e.target[0].value = "";
//   };

//   return (
//     <div className='myGigs'>
//       {isLoading ? "loading" : error ? "something went wrong" : <div className="container">
//         <div className="title">
//           <h1>Gigs</h1>
//           {currentUser.isSeller && (<Link to="/add">
//             <button>
//               Add New Gig
//             </button>
//           </Link>)}
//         </div>
//         <table>
//           <tr>
//             <th>Image</th>
//             <th>Title</th>
//             <th>Price</th>
//             <th>Sales</th>
//             <th>Action</th>
//           </tr>
//           {data.map((gig) => (
//             <tr key={gig._id}>
//               <td>
//                 <img src={gig.cover} alt="" className='img' />
//               </td>
//               <td>{gig.title}</td>
//               <td>{gig.price}</td>
//               <td>{gig.sales}</td>
//               <td>
//                 <img src="./../img/delete.png" alt="" className='delete' onClick={()=>handledelete(gig._id)} />
//               </td>
//             </tr>
//           ))
//           }
//         </table>

//       </div>}
//     </div>
//   )
// }

// export default MyGigs

import React from "react";
import { Link } from "react-router-dom";
import "./MyGigs.scss";

function MyGigs() {
  const currentUser = {
    id: 1,
    username: "Anna",
    isSeller: true,
  };

  return (
    <div className="myGigs">
      <div className="container">
        <div className="title">
          <h1>{currentUser.isSeller ? "Gigs" : "Orders"}</h1>
          {currentUser.isSeller && (
            <Link to="/add">
              <button>Add New Gig</button>
            </Link>
          )}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Stunning concept art</td>
            <td>59.<sup>99</sup></td>
            <td>13</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Ai generated concept art</td>
            <td>120.<sup>99</sup></td>
            <td>41</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>High quality digital character</td>
            <td>79.<sup>99</sup></td>
            <td>55</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Illustration hyper realistic painting</td>
            <td>119.<sup>99</sup></td>
            <td>29</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Original ai generated digital art</td>
            <td>59.<sup>99</sup></td>
            <td>34</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
          <tr>
            <td>
              <img
                className="image"
                src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
            </td>
            <td>Text based ai generated art</td>
            <td>110.<sup>99</sup></td>
            <td>16</td>
            <td>
              <img className="delete" src="./img/delete.png" alt="" />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyGigs;