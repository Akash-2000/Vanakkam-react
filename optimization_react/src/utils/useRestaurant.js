import { useState, useEffect } from "react"
import { RESTAURANT_URL } from "./constants"

const useRestaurantData = (resId) => {

    const [restaurantData, setRestaurantData] = useState(null)
    
    useEffect(() => {
        fetchData()
    }, [])

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
    return restaurantData
}

export default useRestaurantData