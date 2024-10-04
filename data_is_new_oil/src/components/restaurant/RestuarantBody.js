import { useState } from "react";
import RestaurantItem from "./RestuarantItem";

const RestaurantBody = ({ title, itemCards, isOpen, setIsShown }) => {
 

  return (
    <div className="px-4 my-2 border rounded-lg w-6/12 m-auto  py-2 shadow-lg">
    <div className="flex justify-between mb-2 cursor-pointer" onClick={setIsShown}>
      <span className="font-bold">{title} - ({itemCards.length})</span>
      <span>🔽</span>
    </div>
   { isOpen && <div className="text-left">
      {itemCards?.map((item) => <RestaurantItem data={item}/>)}
      </div>}
    </div>
  );
};

export default RestaurantBody;
