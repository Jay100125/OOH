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
      <span id="ss">
        <Slide slidesToShow={5} arrowsScroll={5}>
          {cards.map((card) => (
            <CatCard key={card.id} item={card} />
          ))}
        </Slide>
      </span>
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
              Get quality exposure quickly
            </div>
            <p>
              Choose the ideal ad spot in minutes and reach your target audience
              with impactful results.
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
            <h1>AdSpace Advertising Solutions</h1>
            <h2>
              Advanced solutions and professional talent for OOH advertising
            </h2>
            <div className="title">
              <img src="./img/check.png" alt="" />
              AdSpace Pro
            </div>
            <p>
              Access top advertising spaces and professional tools for managing
              ad campaigns
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              AdSpace Certified
            </div>
            <p>
              Build your own branded marketplace of certified advertising spaces
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              AdSpace Enterprise
            </div>
            <p>
              Manage your advertising campaigns and onboard additional ad spaces
              with an end-to-end SaaS solution
            </p>

            <button>Learn More</button>
          </div>
          <div className="item">
            <img style={{borderRadius: "5px", boxShadow:"2px 2px 20px 2px rgba(51, 51, 51, 0.74)"}} src="./img/bg3.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="another">
        <h2 className="h2in">
          Inspiring work made on AdSpace Advertising Platform
        </h2>
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
