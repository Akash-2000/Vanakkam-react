import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Body from "./components/Body";



const App = () => {

  return (
    <React.Fragment>
      <Header />
      <h1 style={{textAlign:"center"}}>Top Restaurants</h1>
      <Body/>
    </React.Fragment>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
