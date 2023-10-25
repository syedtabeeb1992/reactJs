import React from 'react'

const ResturantCard = (props) => {
  console.log("SSSS", props);
  return (
    <div className="res-card">
      <img className="res-logo" src={props.resData.img} />
      <h3>{props.resData.name}</h3>
      <h4> {props.resData.cuisine.join(" , ")}</h4>
      <h4> {props.resData.rating} stars </h4>
      <h4>38 mins</h4>
    </div>
  );
};

export default ResturantCard