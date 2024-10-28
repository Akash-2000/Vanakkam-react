import { addItem } from "../../redux/cartslice";
import { CLOUDINARY_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";

const RestaurantItem = ({ data }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div
      className="flex justify-between border-b-2 mb-3"
      data-testid="myRestaurantItemCard"
    >
      <div className="w-9/12">
        <div>
          <span className="font-medium">{data?.name}</span> -
          <span className="font-medium">
            {" "}
            ₹{data?.price ? data?.price / 100 : data?.defaultPrice / 100}
          </span>
        </div>
        <p className="font-thin text-gray-400">{data?.description}</p>
        <p>
          {data?.itemAttribute?.vegClassifier === "VEG" ? "🍅🍠🌿" : "🍗🍽"} -
          ❇{data?.ratings?.aggregatedRating?.rating} (
          {data?.ratings?.aggregatedRating?.ratingCountV2})
        </p>
      </div>
      <div className="w-3/12 relative">
        <div
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
          onClick={() => handleAddItem(data)}
        >
          <button className="bg-black text-white rounded-md px-3">ADD +</button>
        </div>
        <img src={CLOUDINARY_URL + data.imageId} className="rounded-lg" />
      </div>
    </div>
  );
};

export default RestaurantItem;
