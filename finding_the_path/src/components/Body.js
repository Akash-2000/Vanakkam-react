import React, { useEffect, useState } from "react";
import CardContainer from "./Card";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";

export default function Body({ restaurants }) {
  //handelsearch
  const [searchText, setSearchText] = useState("")
  const [myrestaurants, setRestaurants] = useState([])
  const [allresults,setallResults] = useState([])
  const handleSearch = () => {
    console.log(searchText,"my searchText")
    //if it is an empty text returns the orignal array
    if(searchText == ''){
      setRestaurants(allresults)
    }else{
        //check if the text matches with items
        console.log(myrestaurants)
        const filteredRestaurants = allresults.filter((e) =>
        e.info.name.toLowerCase().includes(searchText.toLowerCase())
      );
       
        console.log(filteredRestaurants.length)
        if(filteredRestaurants.length <= 0){
            console.log("no result found")
            setRestaurants([])
        }else{
          setRestaurants(filteredRestaurants)
        }
    }
  }
  //useEffect
  useEffect(() => {
    console.log("useEffec is called")
    fetchData()
  },[])

  const fetchData = async () => {
    try {
      const response = await fetch(SWIGGY_URL)
      const data = await response.json()
      const allRestaurant = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || []
      console.log(allRestaurant, "HELLO")
      setRestaurants(allRestaurant)
      setallResults(allRestaurant)
    } catch (error) {
      console.warn(error)
    }
  }

  const handleupdateRestaurant = async () => {
    try {
    
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "lat": 13.0503886,
          "lng": 80.2485701,
          "nextOffset": "CJhlELQ4KID4icLpqJSAbTCnEzgE",
          "widgetOffset": {
              "NewListingView_category_bar_chicletranking_TwoRows": "",
              "NewListingView_category_bar_chicletranking_TwoRows_Rendition": "",
              "Restaurant_Group_WebView_PB_Theme": "",
              "Restaurant_Group_WebView_SEO_PB_Theme": "",
              "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo": "39",
              "inlineFacetFilter": "",
              "restaurantCountWidget": ""
          },
          "filters": {},
          "seoParams": {
              "seoUrl": "https://www.swiggy.com/",
              "pageType": "FOOD_HOMEPAGE",
              "apiName": "FoodHomePage"
          },
          "page_type": "DESKTOP_WEB_LISTING",
          "_csrf": "0ZItLzJvxRw9-axcl9ZY8D88AgHizx1QF0Q2GIkc"
      })
      });
      const data = await response.json()
      console.log(data, "my data")
    
    } catch (error) {
      console.warn(error)
    }
  }

  if(myrestaurants.length === 0){
      return(
        <Shimmer/>
      )
  }

  
  return (
    <>
      <div className="search-container">
        <input className="search-input" onChange={(e) => setSearchText(e.target.value)}></input>
        <button className="search-btn" onClick={handleSearch}>Search</button>
      </div>
      <CardContainer data={myrestaurants}  />
    </>
  );
}
