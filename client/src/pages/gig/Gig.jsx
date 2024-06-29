// import React from "react";
// import "./Gig.scss";
// import { Slider } from "infinite-react-carousel/lib";
// import { gigsdetails as gigs } from "../../data"; // Import the gigsdetails data
// import { useParams } from "react-router-dom";

// function Gig() {
//   // Assuming you're using useParams to get the gig ID
//   const { id } = useParams();

//   // Find the gig object using the id
//   const gig = gigs.find((item) => item.id === parseInt(id));

//   if (!gig) {
//     return <div>Gig not found.</div>;
//   }

//   return (
//     <div className="gig">
//       <div className="container">
//         <div className="left">
//           {/* <span className="breadcrumbs">Liverr > Graphics & Design ></span> */}
//           <h1>{gig.title}</h1>
//           <div className="user">
//             <img
//               className="pp"
//               src={gig.pp}
//               alt=""
//             />
//             <span>{gig.username}</span>
//             <div className="stars">
//               {[...Array(gig.star)].map((_, i) => (
//                 <img key={i} src="/img/star.png" alt="" />
//               ))}
//               <span>{gig.star}</span>
//             </div>
//           </div>
//           <Slider slidesToShow={1} arrowsScroll={1} className="slider">
//             <img
//               src={gig.img}
//               alt=""
//             />
//           </Slider>
//           <h2>About This Gig</h2>
//           <p>{gig.desc}</p>
//           <div className="seller">
//             <h2>About The Seller</h2>
//             <div className="user">
//               <img
//                 src={gig.pp}
//                 alt=""
//               />
//               <div className="info">
//                 <span>{gig.username}</span>
//                 <div className="stars">
//                   {[...Array(gig.star)].map((_, i) => (
//                     <img key={i} src="/img/star.png" alt="" />
//                   ))}
//                   <span>{gig.star}</span>
//                 </div>
//                 <button>Contact Me</button>
//               </div>
//             </div>
//             <div className="box">
//               <div className="items">
//                 <div className="item">
//                   <span className="title">From</span>
//                   <span className="desc">{gig.location}</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Member since</span>
//                   <span className="desc">Aug 2022</span>
//                 </div>
//                 <div className="item">
//                   <span className="title">Last delivery</span>
//                   <span className="desc">1 day</span>
//                 </div>
//               </div>
//               <hr />
//               <p>
//                 My name is Anna, I enjoy creating AI generated art in my spare
//                 time. I have a lot of experience using the AI program and that
//                 means I know what to prompt the AI with to get a great and
//                 incredibly detailed result.
//               </p>
//             </div>
//           </div>
//           <div className="reviews">
//             {/* ... Your Reviews component */}
//           </div>
//         </div>
//         <div className="right">
//           <div className="price">
//             <h3>{gig.shortTitle}</h3>
//             <h2>${gig.price}</h2>
//           </div>
//           <p>{gig.shortDesc}</p>
//           <div className="details">
//             <div className="item">
//               <img src="/img/clock.png" alt="" />
//               <span>{gig.deliveryDate} Days Delivery</span>
//             </div>
//             <div className="item">
//               <img src="/img/recycle.png" alt="" />
//               <span>{gig.revisionNumber} Revisions</span>
//             </div>
//           </div>
//           <div className="features">
//             {gig.features.map((feature) => (
//               <div className="item" key={feature}>
//                 <img src="/img/greencheck.png" alt="" />
//                 <span>{feature}</span>
//               </div>
//             ))}
//           </div>
//           <button>Continue</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Gig;

import React from "react";

import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { useParams } from "react-router-dom";
import { gigsdetails } from "../../data";

function Gig() {
  const { id } = useParams();
  console.log(id);
  const gigData = gigsdetails.find((gig) => gig.id === parseInt(id));
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Liverr Graphics & Design </span>
          <h1>{gigData.desc}</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>{gigData.username}</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src={gigData.pp[0]}
              alt=""
            />
            <img
              src={gigData.pp[1]}
              alt=""
            />
            <img
              src={gigData.pp[2]}
              alt=""
            />
          </Slider>
          <h2>About This Post</h2>
          <p>
            Tired of generic OOH ads? We create breathtaking visuals that will
            stop traffic and make your brand unforgettable. From giant character
            portraits to awe-inspiring landscapes, we design unique,
            eye-catching art that's perfect for billboards, bus shelters, and
            more. Ready to make your brand stand out? Let's talk!
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>{gigData.username}</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Ahmedabad</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Anna, I enjoy creating AI generated art in my spare
                time. I have a lot of experience using the AI program and that
                means I know what to prompt the AI with to get a great and
                incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Garner David</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                "Little angel was the first, and after this, the only OOH agency
                I'll be working with. They were incredibly communicative
                throughout the entire process, providing me with regular updates
                and showing me design iterations every step of the way. They
                listened carefully to my vision, understood my target audience,
                and delivered a campaign that exceeded my expectations. The
                final designs are absolutely stunning, and I'm confident they'll
                make a huge impact. I highly recommend Little angel for anyone
                looking for creative, impactful OOH campaigns."
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Sidney Owen</span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                "It was a dream to work with! They listened carefully to my
                vision and provided constant updates throughout the process.
                They truly went above and beyond to make sure I was happy with
                the final design."
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="info">
                  <span>Lyle Giles </span>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                I'm so glad I chose little angel for my OOH campaign. They
                delivered exactly what I was hoping for, and the results have
                been fantastic. I highly recommend them to anyone looking for a
                creative and effective OOH agency.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{gigData.title}</h3>
            <h2>₹{gigData.price}</h2>
          </div>
          <p>{gigData.shortDesc}</p>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>{gigData.features[0]}</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>{gigData.features[1]}</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>{gigData.features[2]}</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
