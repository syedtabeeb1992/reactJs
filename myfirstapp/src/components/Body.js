import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";

const Body = (props) => {


  let originalResList =   resList
  let [listOfRes, setListOfRes] = useState(originalResList);

  const filterr = ()=>{
    filteredRes = listOfRes.filter((res) => res.rating > 4);
    setListOfRes(filteredRes)
  }

  const clear = () =>{
    console.log("clear", listOfRes);
    setListOfRes(originalResList)
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={filterr}
        >
          Top rated resturansts
        </button>

        <button onClick={clear}  >Clear filter</button>
      </div>

      <div className="resturant-container">
        {listOfRes.map((restaurant) => (
          <ResturantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
