import React, { useEffect, useState } from "react";
import ResturantCard from "./ResturantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = (props) => {
  let [listOfRes, setListOfRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  let [isLoading, setisLoading] = useState(true);
  let [filteredRes, setFilteredRes] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("from effect", listOfRes);
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://demo1283547.mockable.io/learn");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const swiggyJsonData = await data.json();
    console.log("json data", swiggyJsonData);

    const restaurant_list = "restaurant_grid_listing";
    const resturantData = swiggyJsonData.data?.cards?.find((card) => {
      return card.card?.card?.id === restaurant_list;
    });

    const resturantList =
      resturantData.card.card.gridElements.infoWithStyle.restaurants.map(
        (res) => res.info
      );

    setisLoading(false);
    setListOfRes(resturantList);
    setFilteredRes(resturantList);

    console.log("LISSSS", listOfRes);
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

  const searchClick = (e) => {
    console.log("Search Text: ", searchText); // Assuming searchText is your state variable

    const newfiltered = listOfRes.filter((res) => {
      return res.name.includes(...searchText); // Use includes to check if name contains searchText
    });

    console.log("newfiltered", newfiltered);

    setFilteredRes(newfiltered);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>NO INTERNET</h1>;

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
              searchClick();
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
        {/* {listOfRes.map((restaurant) => ( */}
        {filteredRes.map((restaurant) => (
          <Link to={"/resturants/" + restaurant.id}>
            {" "}
            <ResturantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
