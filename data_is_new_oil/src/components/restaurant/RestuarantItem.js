import { CLOUDINARY_URL } from "../../utils/constants";

const RestaurantItem = ({ data }) => {
  const dish = data?.card?.info;

  return (
    <div className="flex justify-between border-b-2 mb-3">
      <div className="w-9/12">
        <div>
          <span className="font-medium">{dish?.name}</span> -
          <span className="font-medium">
            {" "}
            ₹{dish?.price ? dish?.price / 100 : dish?.defaultPrice / 100}
          </span>
        </div>
        <p className="font-thin text-gray-400">{dish?.description}</p>
        <p>
          {dish?.itemAttribute?.vegClassifier === "VEG" ? "🍅🍠🌿" : "🍗🍽"} -
          ❇{dish?.ratings?.aggregatedRating?.rating} (
          {dish?.ratings.aggregatedRating?.ratingCountV2})
        </p>
      </div>
      <div className="w-3/12 relative">
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <button className="bg-black text-white rounded-md px-3">ADD +</button>
        </div>
        <img src={CLOUDINARY_URL + dish.imageId} className="rounded-lg" />
      </div>
    </div>
  );
};

export default RestaurantItem;
