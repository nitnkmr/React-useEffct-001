import React from "react";
import { Link } from "react-router-dom";


const Card = ({ seeMoreHandler ,data }) => {
  return (
   
    <div className="card">
      <img src={data.Poster} alt="" />
      <div className="lable">{data.Title}</div>
      <div className="hlables">
        <span>
          {(data.Type).toUpperCase()}
        </span>
        <span>
          {data.Year}
        </span>
      </div>
     

      {/* <Link to={"/SeeMore"}>
        <button onClick={() => seeMoreHandler(data.imdbID)}>Info</button>
      </Link> */}
    </div>
  );
};

export default Card;
