import React from "react";
import { Link } from "react-router-dom";
import "./CatCard.scss";

function CatCard({ item }) {
  return (
    <Link to={`/gigs?title=${encodeURIComponent(item.title)}`}>
      <div className="catCard">
        <img src={item.img} alt=""/>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
}

export default CatCard;
