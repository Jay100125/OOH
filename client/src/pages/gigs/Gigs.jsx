// import React, { useState, useRef, useEffect } from 'react'
// import './Gigs.scss'
// import GigCard from '../../components/gigCard/GigCard'
// import { useQuery } from '@tanstack/react-query'
// import newRequest from '../../utils/newRequest'
// import { useLocation } from "react-router-dom";

// const Gigs = () => {
//   const [open, setOpen] = useState(false)
//   const [sort, setSort] = useState('sales')
//   const minRef = useRef();
//   const maxRef = useRef();

//   const { search } = useLocation();

//   const { isLoading, error, data, refetch } = useQuery({
//     queryKey: ["gigs"],
//     queryFn: () =>
//       newRequest
//         .get(
//           `/gigs${search}`
//         )
//         .then((res) => {
//           return res.data;
//         }),
//   });


//   console.log(data);
//   const reSort = (type) => {
//     setSort(type)
//     setOpen(false)
//   }

//   const apply = () => {
//     refetch();
//   }


//   return (
//     <div className="gigs">
//       <div className="container">
//         <span className="breadcrumbs">Liverr  Graphics & Design </span>
//         <h1>AI Artists</h1>
//         <p>
//           Explore the boundaries of art and technology with DesignHives AI artists
//         </p>
//         <div className="menu">
//           <div className="left">
//             <span>Budget</span>
//             <input ref={minRef} type="number" placeholder="min" />
//             <input ref={maxRef} type="number" placeholder="max" />
//             <button onClick={apply}>Apply</button>
//           </div>
//           <div className="right">
//             <span className="sortBy">Sort by</span>
//             <span className="sortType">
//               {sort === "sales" ? "Best Selling" : "Newest"}
//             </span>
//             <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
//             {open && (
//               <div className="rightMenu">
//                 {sort === "sales" ? (
//                   <span onClick={() => reSort("createdAt")}>Newest</span>
//                 ) : (
//                   <span onClick={() => reSort("sales")}>Best Selling</span>
//                 )}
//                 <span onClick={() => reSort("sales")}>Popular</span>
//               </div>
//             )}
//           </div>
//         </div>
//         <div className="cards">
//           {isLoading
//             ? "loading"
//             : error
//               ? "Something went wrong!"
//               : data.map((gig) => <GigCard key={gig._id} item={gig} />)}
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Gigs
import React, { useRef, useState, useEffect } from "react";
import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import { useLocation } from "react-router-dom";

function Gigs() {
  const [sort, setSort] = useState("sales");
  const [open, setOpen] = useState(false);
  const [filteredGigs, setFilteredGigs] = useState([]);
  const [cat, setCat] = useState(null);
  const minRef = useRef();
  const maxRef = useRef();

  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);
    const title = query.get("title");
    if (title) {
      const filtered = gigs.filter((gig) =>
        gig.title.toLowerCase().includes(title.toLowerCase())
      );
      setFilteredGigs(filtered);
      setCat(title)
    } else {
      setFilteredGigs(gigs);
    }
  }, [search]);

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="container">
        {/* <span className="breadcrumbs">Liverr > Graphics & Design ></span> */}
        <h1>{cat}</h1>
        <p>
          Discover all {cat} we offer on our platform
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {filteredGigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
