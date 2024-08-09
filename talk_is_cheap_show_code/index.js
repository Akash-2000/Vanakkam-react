import React from "react";
import ReactDOM from "react-dom";
import { data } from "./data";
import "./index.css"

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src="https://www.vhv.rs/dpng/d/433-4330684_our-delivery-service-home-delivery-logo-png-transparent.png" width={50} height={50}/>
      </div>
      <div className="rightContainer">
        <ul>
          <li>About us</li>
          <li>contact us</li>
          <li>
          <i class="fa-solid fa-cart-shopping"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

const CardContainer = ({data}) => {



  return(
    <div style={{
      display:"flex",
      flexWrap:"wrap",
      justifyContent:"center"
    }}>
    {data.map(({info}) => {

      console.log(info)
      return(
      <Card data={info}/>

      )
    })}
    </div>
  )
};

const Card = ({data}) => {
 
    return(
        <div key={data.id} className="carContainer">
            <h3>{data.name}</h3>
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${data.cloudinaryImageId}`} width={85} height={85}/>
            <p>{data.areaName}</p>
            <p>{data.totalRatingsString}</p>
        </div>
    )
};

const App = () => {
  const {
    card: {
        card: {
            gridElements: {
                infoWithStyle: { restaurants }
            }
        }
    }
} = data[1];
  return (
    <React.Fragment>
      <Header />
      <h1 style={{textAlign:"center"}}>Top Restaurants</h1>
      <CardContainer data = {restaurants}/>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
