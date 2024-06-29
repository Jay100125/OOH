// import React from 'react'
// import "./Gig.scss"
// import { Slider } from 'infinite-react-carousel'
// import { useQuery } from '@tanstack/react-query'
// import { Link, useParams } from 'react-router-dom'
// import newRequest from '../../utils/newRequest'
// import Reviews from '../../components/reviews/Reviews'


// const Gig = () => {
//   const { id } = useParams();

//   const { isLoading, error, data } = useQuery({
//     queryKey: ["gig"],
//     queryFn: () =>
//       newRequest.get(`/gigs/single/${id}`).then((res) => {
//         return res.data;
//       }),
//   });

//   const userId = data?.userId;

//   const {
//     isLoading: isLoadingUser,
//     error: errorUser,
//     data: dataUser,
//   } = useQuery({
//     queryKey: ["user"],
//     queryFn: () =>
//       newRequest.get(`/users/${userId}`).then((res) => {
//         return res.data;
//       }),
//     enabled: !!userId,
//   });

//   return (
//     <div className="gig">
//       {isLoading ? (
//         "loading"
//       ) : error ? (
//         "Something went wrong!"
//       ) : (
//         <div className="container">
//           <div className="left">
//             <span className="breadcrumbs">
//               Fiverr {">"} Graphics & Design {">"}
//             </span>
//             <h1>{data.title}</h1>
//             {isLoadingUser ? (
//               "loading"
//             ) : errorUser ? (
//               "Something went wrong!"
//             ) : (
//               <div className="user">
//                 <img
//                   className="pp"
//                   src={dataUser.img || "/img/pinterest.png"}
//                   alt=""
//                 />
//                 <span>{dataUser.username}</span>
//                 <div className="stars">
//                   {Array(data.star).fill().map((item, i) => (
//                     <img src="./../img/star.png" alt="" key={i} />
//                   ))}
//                   <span>{data.star}</span>
//                 </div>
//               </div>
//             )}
//             <Slider slidesToShow={1} arrowsScroll={1} className="slider">
//               {data.images.map((img) => (
//                 <img key={img} src={img} alt="" />
//               ))}
//             </Slider>
//             <h2>About This Gig</h2>
//             <p>{data.desc}</p>
//             {isLoadingUser ? (
//               "loading"
//             ) : errorUser ? (
//               "Something went wrong!"
//             ) : (
//               <div className="seller">
//                 <h2>About The Seller</h2>
//                 <div className="user">
//                   <img src={dataUser.img || "/img/pinterest.png"} alt="" />
//                   <div className="info">
//                     <span>{dataUser.username}</span>
//                     <div className="stars">
//                       {Array(data.star).fill().map((item, i) => (
//                         <img src="./../img/star.png" alt="" key={i} />
//                       ))}
//                       <span>{data.star}</span>
//                     </div>
//                     <button>Contact Me</button>
//                   </div>
//                 </div>
//                 <div className="box">
//                   <div className="items">
//                     <div className="item">
//                       <span className="title">From</span>
//                       <span className="desc">{dataUser.country}</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Member since</span>
//                       <span className="desc">Aug 2022</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Avg. response time</span>
//                       <span className="desc">4 hours</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Last delivery</span>
//                       <span className="desc">1 day</span>
//                     </div>
//                     <div className="item">
//                       <span className="title">Languages</span>
//                       <span className="desc">English</span>
//                     </div>
//                   </div>
//                   <hr />
//                   <p>{dataUser.desc}</p>
//                 </div>
//               </div>
//             )}
//             <Reviews gigId={id} />
//           </div>
//           <div className="right">
//             <div className="price">
//               <h3>{data.shortTitle}</h3>
//               <h2>{data.price}</h2>
//             </div>
//             <p>{data.shortDesc}</p>
//             <div className="details">
//               <div className="item">
//                 <img src="/img/clock.png" alt="" />
//                 <span>{data.deliveryDate} Days Delivery</span>
//               </div>
//               <div className="item">
//                 <img src="/img/recycle.png" alt="" />
//                 <span>{data.revisionNumber} Revisions</span>
//               </div>
//             </div>
//             <div className="features">
//               {data.features.map((feature) => (
//                 <div className="item" key={feature}>
//                   <img src="/img/greencheck.png" alt="" />
//                   <span>{feature}</span>
//                 </div>
//               ))}
//             </div>
//             <Link to={`/pay/${id}`}>
//               <button>Continue</button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Gig

import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

function Gig() {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadcrumbs">Liverr > Graphics & Design ></span>
          <h1>Promote Your Brand on Prime Billboard Locations</h1>
          <div className="user">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Anna Bell</span>
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
              src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1462935/pexels-photo-1462935.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
           Tired of generic OOH ads? We create breathtaking visuals that will stop traffic and make your brand unforgettable. From giant character portraits to awe-inspiring landscapes, we design unique, eye-catching art that's perfect for billboards, bus shelters, and more. Ready to make your brand stand out? Let's talk!
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="info">
                <span>Anna Bell</span>
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
              "Little angel was the first, and after this, the only OOH agency I'll be working with. They were incredibly communicative throughout the entire process, providing me with regular updates and showing me design iterations every step of the way. They listened carefully to my vision, understood my target audience, and delivered a campaign that exceeded my expectations. The final designs are absolutely stunning, and I'm confident they'll make a huge impact. I highly recommend Little angel for anyone looking for creative, impactful OOH campaigns."
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
                <span>4</span>
              </div>
              <p>
              "It was a dream to work with! They listened carefully to my vision and provided constant updates throughout the process. They truly went above and beyond to make sure I was happy with the final design."
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
              I'm so glad I chose little angel for my OOH campaign. They delivered exactly what I was hoping for, and the results have been fantastic. I highly recommend them to anyone looking for a creative and effective OOH agency.
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
            <h3>1 AI generated image</h3>
            <h2>$ 59.99</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Size : 20 X 10 ft.</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Location : Nikol, Ahmedabad</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Target</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
