import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedby/TrustedBy";
import Slide from "../../components/slide/Slide";
import { cards } from "../../data";
import CatCard from "../../components/catCard/CatCard";
import { projects } from "../../data";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Home = () => {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Stick to your budget
            </div>
            <p>
              Find the perfect advertising space for every price point. No
              hidden fees, just transparent, project-based pricing.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>
            Choose the ideal ad spot in minutes and reach your target audience with impactful results.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Pay when you are happy
            </div>
            <p>
              Upfront quotes mean no surprises. Payments only get released when
              you approve.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>
              Our round-the-clock support team is available to help anytime,
              anywhere.
            </p>
          </div>
          <div className="item">
            <video
              src="./img/someVideo.mp4"
              poster="./img/videoPic.png"
              controls
            ></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>DesignHive Bussiness</h1>
            <h2>Advanced solutions and professional talent for businesses</h2>
            <div className="title">
              <img src="./img/check.png" alt="" />
              DesignHive Pro
            </div>
            <p>
              Access top freelancers and professional business tools for any
              project
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              DesignHive Certified
            </div>
            <p>Build your own branded marketplace of certified experts</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              DesignHive Enterprise
            </div>
            <p>
              Manage your freelance workforce and onboard additional talent with
              an end-to-end SaaS solution
            </p>

            <button>Learn More</button>
          </div>
          <div className="item">
            <img src="./img/Fe.webp" alt="" />
          </div>
        </div>
      </div>

      <div className="another">
        <h2 className="h2in">Inspiring work made on DesignHive</h2>
        <Slide slidesToShow={4} arrowsScroll={4}>
          {projects.map((project) => (
            <ProjectCard key={project.id} item={project} />
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default Home;
