import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { gigsdetails as gigs } from "../../data"; // Import the gigsdetails data 
import { useParams } from "react-router-dom";

function Gig() {
  // Assuming you're using useParams to get the gig ID
  const { id } = useParams();

  // Find the gig object using the id
  const gig = gigs.find((item) => item.id === parseInt(id));

  if (!gig) {
    return <div>Gig not found.</div>;
  }

  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          {/* <span className="breadcrumbs">Liverr > Graphics & Design ></span> */}
          <h1>{gig.title}</h1>
          <div className="user">
            <img
              className="pp"
              src={gig.pp}
              alt=""
            />
            <span>{gig.username}</span>
            <div className="stars">
              {[...Array(gig.star)].map((_, i) => (
                <img key={i} src="/img/star.png" alt="" />
              ))}
              <span>{gig.star}</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src={gig.img}
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>{gig.desc}</p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src={gig.pp}
                alt=""
              />
              <div className="info">
                <span>{gig.username}</span>
                <div className="stars">
                  {[...Array(gig.star)].map((_, i) => (
                    <img key={i} src="/img/star.png" alt="" />
                  ))}
                  <span>{gig.star}</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">{gig.location}</span> 
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
            {/* ... Your Reviews component */}
          </div>
        </div>
        <div className="right">
          <div className="price">
            <h3>{gig.shortTitle}</h3>
            <h2>${gig.price}</h2>
          </div>
          <p>{gig.shortDesc}</p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>{gig.deliveryDate} Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>{gig.revisionNumber} Revisions</span>
            </div>
          </div>
          <div className="features">
            {gig.features.map((feature) => (
              <div className="item" key={feature}>
                <img src="/img/greencheck.png" alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;