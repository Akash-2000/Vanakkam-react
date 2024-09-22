const RestaurantHeader = ({name, avgRating, totalRatingsString}) => {
    return(
        <div className="restaurant-header">
            <h1>{name}</h1>
            <div className="restaurant details">
                <p>{avgRating}({totalRatingsString})</p>
            </div>
        </div>
    )
}

export default RestaurantHeader