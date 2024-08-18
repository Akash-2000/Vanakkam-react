import React, { useEffect, useState } from "react";
import CardContainer from "./Card";
import Shimmer from "./Shimmer";

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
      const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const data = await response.json()
      console.log(data)
      console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants, "my data from the api")
      setRestaurants(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setallResults(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
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
      <CardContainer data={myrestaurants} />
    </>
  );
}
