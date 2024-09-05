import React, { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import RestaurantHeader from "./restaurant/RestaurantHeader"
import RestaurantBody from "./restaurant/RestuarantBody"
import Shimmer from "./Shimmer"
import { RESTAURANT_URL } from "../utils/constants"


const Restaurant = () =>{
  const [restaurantData, setRestaurantData] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])
    const {resId} = useParams()
    const fetchData = async () => {
        try {
          const response = await fetch(RESTAURANT_URL+resId
          )
          const data = await response.json()
          setRestaurantData(data?.data?.cards)
        } catch (error) {
          console.warn(error)
        }
      }

    if(restaurantData == null ) return <Shimmer/>  

    const restaurantInfo = restaurantData[2]?.card?.card?.info || {};
    const { name, avgRating, totalRatingsString } = restaurantInfo;
    
    const restaurantMenu = restaurantData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    console.log(restaurantMenu, "menu data")
    let filteredRestaurantData = restaurantMenu
      .filter(({ card }) => card?.card?.categories)
      .map(({ card }) => ({
        data: card?.card?.categories[0]
      }));
      console.log(filteredRestaurantData, "filtered data")
      if(filteredRestaurantData.length <=0){
        filteredRestaurantData = restaurantMenu
        .filter(({card}) => card?.card?.itemCards)
        .map(({card}) =>  ({data: card?.card}))
        console.log("Filterd data", filteredRestaurantData)
      }
      


    
    return(
        <div className="restaurant-body">
          <RestaurantHeader name={name} avgRating={avgRating} totalRatingsString={totalRatingsString}/>
          {filteredRestaurantData?.map(({data}) => <RestaurantBody key={data?.title} title={data?.title} itemCards={data?.itemCards}/>)}
        </div>
    )
}

export default Restaurant