import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturantMenu = () => {
 
  const { resId } = useParams();




  const resInfo = useResturantMenu(resId)



  return (
    <div>
      {resInfo === null ? (
        <Shimmer />
      ) : (
        <div>
          <h1>{resInfo?.cards[0]?.card?.card?.info.name}</h1>
          <h1>{resInfo?.cards[0]?.card?.card?.info.cuisines.join(",")}</h1>
          <p>{resInfo?.cards[0]?.card?.card?.info.costForTwoMessage}</p>

          <ul>
            {resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
              (response) => {
                return (
                  <li>
                    {response.card.info.name} -{" "}
                    {response.card.info.defaultPrice / 100} /-Rs{" "}
                  </li>
                );
              }
            )}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResturantMenu;
