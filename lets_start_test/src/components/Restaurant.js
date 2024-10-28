import React, { useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantHeader from "./restaurant/RestaurantHeader";
import RestaurantBody from "./restaurant/RestuarantBody";
import Shimmer from "./Shimmer";
import useRestaurantData from "../utils/useRestaurant";

const Restaurant = () => {
  const { resId } = useParams();
  const [itemIndex, setItemIndex] = useState(null);

  const restaurantData = useRestaurantData(resId);

  if (restaurantData == null) return <Shimmer />;

  console.log(restaurantData, "ResId");

  const restaurantInfo = restaurantData[2]?.card?.card?.info || {};

  const {
    name,
    avgRating,
    totalRatingsString,
    cuisines,
    feeDetails: { totalFee },
  } = restaurantInfo;

  const restaurantMenu =
    restaurantData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (restaurant) =>
        restaurant?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    ) || [];
  return (
    <div className="m-4">
      <RestaurantHeader
        name={name}
        avgRating={avgRating}
        totalRatingsString={totalRatingsString}
        cuisines={cuisines}
        totalFee={totalFee}
      />
      {restaurantMenu?.map((data, index) => {
        const Menu = data?.card?.card;
        return (
          <RestaurantBody
            key={Menu?.title}
            title={Menu?.title}
            itemCards={Menu?.itemCards}
            isOpen={index === itemIndex ? true : false}
            setIsShown={() => {
              const selectIndex = itemIndex === index ? null : index;
              setItemIndex(selectIndex);
            }}
          />
        );
      })}
    </div>
  );
};

export default Restaurant;
