import React, { useState } from "react";
import CardContainer from "./Card";

export default function Body({ restaurants }) {
  //handelsearch
  const [searchText, setSearchText] = useState("")
  const [myrestaurants, setRestaurants] = useState(restaurants)
  const handleSearch = () => {
    console.log(searchText,"my searchText")
    //if it is an empty text returns the orignal array
    if(searchText == ''){
      setRestaurants(restaurants)
    }else{
        //check if the text matches with items
        console.log(myrestaurants)
        const filteredRestaurants = restaurants.filter((e) =>
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
