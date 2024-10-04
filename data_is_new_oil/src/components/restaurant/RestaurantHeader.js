const RestaurantHeader = ({name, avgRating, totalRatingsString, cuisines, totalFee}) => {
    
    return(
        <div className="w-6/12 m-auto">
            <h1 className="font-medium text-2xl">{name}</h1>
            <div className="font-medium text-lg border rounded-md shadow-xl flex flex-col gap-5 my-2 px-2">
                <p>⭐{avgRating}({totalRatingsString} 📊)</p>
                <ul className="flex gap-3  font-thin">
                    <li className="font-medium !no-underline">cuisines :</li>
                    {cuisines?.map((cuisine) => <li className="underline" key={cuisine}>{cuisine}</li>)}
                </ul>
                <p>🚴‍♂️{totalFee/100} Delivery fees</p>
            </div>
        </div>
    )
}

export default RestaurantHeader