import { CLOUDINARY_URL } from "../utils/constants";

//cards for the data to render
const Card = ({data}) => {
   
    return(
        <div key={data.id} className="carContainer">
            <h3>{data.name}</h3>
            <img src={`${CLOUDINARY_URL}${data.cloudinaryImageId}`} width={85} height={85}/>
            <p>{data.areaName}</p>
            <p>{data.totalRatingsString}</p>
        </div>
    )
};




const CardContainer = ({data}) => {

    if(data.length <= 0){
      return(
        <div>
          <h3>No results found</h3>
        </div>
      )
    }
    return(
      <div style={{
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center"
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
  
