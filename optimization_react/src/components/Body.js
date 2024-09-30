import React, { useEffect, useState } from "react";
import CardContainer from "./Card";
import Shimmer from "./Shimmer";
import { SWIGGY_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Body({ restaurants }) {
  //handelsearch
  const [searchText, setSearchText] = useState("")
  const [myrestaurants, setRestaurants] = useState([])
  const [allresults,setallResults] = useState([])
  const onlineStatus = useOnlineStatus()

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

  if(myrestaurants.length === 0){
      return(
        <Shimmer/>
      )
  }
  console.log(onlineStatus)
  if(onlineStatus === false) return <h1>It looks offline !! please check your intrenet conenction</h1>
  
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
