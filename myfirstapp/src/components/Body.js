import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {
  let [listOfRes, setListOfRes] = useState([]);
  const [seatchText, setsearchtext] = useState("");
  let [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    fetchData();
    console.log("from effect", listOfRes);
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://demo1283547.mockable.io/learn");
    const json = await data.json();
    console.log("json data", json);
    setisLoading(false);
    setListOfRes(json);
  };

  const filterr = () => {
    const filteredRes = listOfRes.filter((res) => {
      return res.rating > 4;
    });
    setListOfRes(filteredRes);
  };

  const clear = () => {
    console.log("clear", listOfRes);
    setListOfRes(originalResList);
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={seatchText}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />

          <button
            onClick={() => {
              console.log(seatchText);
            }}
          >
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={filterr}>
          Top rated resturansts
        </button>

        <button onClick={clear}>Clear filter</button>
      </div>

      {isLoading ? <Shimmer /> : ""}

      <div className="resturant-container">
        {listOfRes.map((restaurant) => (
          <ResturantCard resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
