import { CLOUDINARY_URL } from "../utils/constants";

import { useRef, useEffect } from "react";

//cards for the data to render
const Card = ({data}) => {



    return(
        <div key={data.id} className="carContainer" >
            <h3>{data.name}</h3>
            <img src={`${CLOUDINARY_URL}${data.cloudinaryImageId}`} width={85} height={85}/>
            <p>{data.areaName}</p>
            <p>{data.totalRatingsString}</p>
        </div>
    )
};




const CardContainer = ({data, updateRestaurant}) => {

  const containerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        // setScrollTop(containerRef.current.scrollTop);
            const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
            const isNearBottom = scrollTop + clientHeight >= scrollHeight;
            console.log(isNearBottom, "isNearBottom")
            if (isNearBottom) {
              console.log("Reached bottom");
              // DO SOMETHING HERE
              updateRestaurant()
            }
      }
    };

    const refElement = containerRef.current;
    refElement.addEventListener('scroll', handleScroll);

    return () => {
      refElement.removeEventListener('scroll', handleScroll);
    };
  }, []);




    if(data.length <= 0){
      return(
        <div>
          <h3>No results found</h3>
        </div>
      )
    }
    return(
      <div
      ref={containerRef}
      style={{
        display: "flex",
        flexWrap: "wrap",
        height: '100vh',    // Makes sure the container is scrollable
        overflowY: 'auto', // Enables vertical scrolling
      }}>
      {data?.map(({info}) => {
          return(
        <Card data={info} key={info.id}/>
  
        )
      })}
      </div>
    )
  };


  export default CardContainer;
  
