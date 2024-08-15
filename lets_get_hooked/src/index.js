import React from "react";
import ReactDOM from "react-dom";
import { data } from "./utils/data";
import Header from "./components/Header";
import Body from "./components/Body";




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
      <Body restaurants={restaurants}/>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
