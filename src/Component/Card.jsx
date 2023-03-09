import React from "react";
import { Link } from "react-router-dom";

const Card = ({ img, lable, healthLabels, id, seeMoreHandler }) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="lable">{lable}</div>
      <div className="hlables">
        <span>{healthLabels[0]}</span>
        <span>{healthLabels[1]}</span>
        <span>{healthLabels[2]}</span>
      </div>

      <Link to={"/SeeMore"}>
        <button onClick={() => seeMoreHandler(id)}>See Ingrediants</button>
      </Link>
    </div>
  );
};

export default Card;
