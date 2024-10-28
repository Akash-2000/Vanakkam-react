import { CLOUDINARY_URL } from "../utils/constants";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
//cards for the data to render
const Card = ({ data }) => {
  console.log(data);
  return (
    <Link to={`/restaurant/${data.id}`}>
      <div
        key={data.id}
        className="m-4 p-4 bg-slate-300 rounded-lg w-44 h-72 font-medium hover:bg-slate-400 hover:font-bold"
      >
        <h3 className="text-wrap min-w-10">{data.name}</h3>
        <img
          src={`${CLOUDINARY_URL}${data.cloudinaryImageId}`}
          className="rounded-lg w-40 h-40"
        />
        <p className="min-w-0 ">{data.areaName}</p>
        <p>({data.totalRatingsString} ratings)</p>
      </div>
    </Link>
  );
};

const CardContainer = ({ data, updateRestaurant }) => {
  const containerRef = useRef();
  console.log(data, "my data");

  const PromotedCard = withPromotedLabel(Card);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // setScrollTop(containerRef.current.scrollTop);
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const isNearBottom = scrollTop + clientHeight >= scrollHeight;
        console.log(isNearBottom, "isNearBottom");
        if (isNearBottom) {
          console.log("Reached bottom");
          // DO SOMETHING HERE
          // updateRestaurant()
        }
      }
    };

    const refElement = containerRef.current;
    refElement.addEventListener("scroll", handleScroll);

    return () => {
      refElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (data.length <= 0) {
    return (
      <div>
        <h3>No results found</h3>
      </div>
    );
  }
  return (
    <div ref={containerRef} className="flex flex-wrap mx-4 px-4">
      {data?.map(({ info }) => {
        return (
          <div key={info.id}>
            {info?.avgRating >= 4.5 ? (
              <PromotedCard data={info} />
            ) : (
              <Card data={info} />
            )}
          </div>
        );
      })}
    </div>
  );
};

/*HIGHER ORDER FUNCTION */
const withPromotedLabel = (Card) => {
  return (props) => {
    console.log("props in label", props);
    return (
      <>
        <label className="absolute bg-orange-500 text-white px-2 rounded-lg mt-3">
          Promoted
        </label>
        <Card data={props.data} />
      </>
    );
  };
};

export default CardContainer;
