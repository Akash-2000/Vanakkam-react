const RestaurantHeader = ({name, avgRating, totalRatingsString}) => {
    return(
        <div className="bg-gradient-to-b from-slate-300 to bg-pink-300 p-4 rounded-lg">
            <h1 className="font-medium text-center text-lg">{name}</h1>
            <div className="font-medium text-center text-lg">
                <p> {avgRating}({totalRatingsString})</p>
            </div>
        </div>
    )
}

export default RestaurantHeader