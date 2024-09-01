import React, { useState } from "react"
import { useEffect } from "react"
import RestaurantHeader from "./restaurant/RestaurantHeader"
import RestaurantBody from "./restaurant/RestuarantBody"
import Shimmer from "./Shimmer"


const Restaurant = () =>{
  const [restaurantData, setRestaurantData] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        try {
          const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0503886&lng=80.2485701&restaurantId=558222&catalog_qa=undefined&submitAction=ENTER")
          const data = await response.json()
          console.log(data, "my data")
          setRestaurantData(data?.data?.cards)
        } catch (error) {
          console.warn(error)
        }
      }

    if(restaurantData == null ) return <Shimmer/>  

    const {name, avgRating, totalRatingsString} = restaurantData[2]?.card?.card?.info
    const restaurantMenu = restaurantData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    console.log(restaurantMenu)
    return(
        <div className="restaurant-body">
          <RestaurantHeader name={name} avgRating={avgRating} totalRatingsString={totalRatingsString}/>
          <RestaurantBody/>
          <RestaurantBody/>
        </div>
    )
}

export default Restaurant