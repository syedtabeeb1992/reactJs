import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";

const Body = (props) => {
  let [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
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

  const searchclick = (e) => {
    console.log("sadasd", searchtext);
  };

  // const searchClick = (e) => {
  //   console.log("Search Text: ", searchText); // Assuming searchText is your state variable

  //   const newfiltered = listOfRes.filter((res) => {

  //       return res.name
  //       console.log("RES", res.name);
  //     // res.name
  //     // if (res.name.searchText) {
  //     //   // Compare with the value in searchText
  //     //   console.log(res.name);
  //     //   return res.name;
  //     // }
  //   });

  //   console.log("newfiltered", newfiltered);

  //   setListOfRes(newfiltered);
  // };
  const searchClick = (e) => {
    console.log("Search Text: ", searchText); // Assuming searchText is your state variable
  
    const newfiltered = listOfRes.filter((res) => {
      return res.name.includes(searchText); // Use includes to check if name contains searchText
    });
  
    console.log("newfiltered", newfiltered);
  
    setListOfRes(newfiltered)
  };
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="searchbox"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />

          <button
            onClick={(f) => {
              searchClick("sssssdsd");
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
