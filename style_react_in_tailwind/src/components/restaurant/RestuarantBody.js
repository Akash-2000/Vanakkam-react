import { useState } from "react";

const RestaurantBody = ({ title, itemCards }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="bg-slate-300 mt-3 rounded-lg">
      <div className="bg-orange-400 flex justify-around">
        <div>
          <h4 className="text-lg font-bold text-center text-justify">{title}</h4>
        </div>
        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <div>
              <i class="fa-solid fa-arrow-down text-lg  p-3 rounded-full"></i>
            </div>
          ) : (
            <div>
              <i class="fa-solid fa-arrow-up text-lg p-2 rounded-full"></i>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="p-2 border-b"></th>
                <th className="p-2 border-b">Price</th>
                <th className="p-2 border-b">Rating</th>
              </tr>
            </thead>
            {itemCards?.map(({ card }) => {
              const { info } = card || {};
              const { name, price, ratings } = info || {};
              const rating = ratings?.aggregatedRating?.rating;
              const ratingCount = ratings?.aggregatedRating?.ratingCountV2;

              return (
                // <div key={info?.id} className="my-4 flex justify-around">
                //   <h3>{name}</h3>
                //   <p>{price / 100}</p>
                //   <p>
                //     {rating} ({ratingCount} Rating)
                //   </p>
                // </div>

                <tbody>
                  <tr key={info?.id}>
                    <td className="p-2 border-b">{name}</td>
                    <td className="p-2 border-b">{(price / 100).toFixed(2)}</td>
                    <td className="p-2 border-b">
                      {rating} ({ratingCount} Rating)
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      )}
    </div>
  );
};

export default RestaurantBody;
