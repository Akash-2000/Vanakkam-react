import { useState } from "react";

const RestaurantBody = ({ title, itemCards }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="restaurant-body">
      <div className="restaurant-body-tittle">
        <div>
          <h4>{title}</h4>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <i class="fa-solid fa-arrow-up"></i>
          ) : (
            <i class="fa-solid fa-arrow-down"></i>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="restaurant-items">
          {itemCards?.map(({ card }) => {
            const { info } = card || {};
            const { name, price, ratings } = info || {};
            const rating = ratings?.aggregatedRating?.rating;
            const ratingCount = ratings?.aggregatedRating?.ratingCountV2;

            return (
              <div key={info?.id}>
                <h3>{name}</h3>
                <p>{price / 100}</p>
                <p>
                  {rating} ({ratingCount} Rating)
                </p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RestaurantBody;
