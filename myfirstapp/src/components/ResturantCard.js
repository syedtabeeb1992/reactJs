import React from "react";
import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={CDN_URL + props.resData.cloudinaryImageId}
      />

      <h3>{props.resData.name}</h3>
      <h4>{props.resData.cuisines.join(",")}</h4>
      <h4> {props.resData.avgRating} stars </h4>
    </div>
  );
};

export default ResturantCard;
