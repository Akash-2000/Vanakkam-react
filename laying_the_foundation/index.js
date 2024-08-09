import React from "react";
import ReactDOM from "react-dom";
import "./index.css"

//Task1
const NestedHeader = React.createElement("div", { className: "title" }, [
  React.createElement("h1", { id: "h1" }, "Heading1"),
  React.createElement("h2", { id: "h2" }, "Heading2"),
  React.createElement("h3", { id: "h3" }, "Heading3"),
]);

//Create the same element using JSX
const nestedHeaderElement = (
  <div className="title">
    <h1>Heading1</h1>
    <h2>Heading2</h2>
    <h3>Heading3</h3>
  </div>
);
const TitleComponent = ({number}) => <h1>Heading {number}</h1>


// Create a functional component of the same with JSX
const NestedFunctionalHeader = () => {
  return (
    <div className="Functionaltitle">
      <TitleComponent number={1}/>
      {TitleComponent({number:2})}
      <TitleComponent number={3}></TitleComponent>
    </div>
  );
};

//Logo element
const Logo = <i class="fa fa-arrows" aria-hidden="true"></i>
//Search Bar
const SearchBar = () => {
  return(
    <input type="search" id="site-search" name="q"  />
  )
}
//userIcon
const UserIcon = () => 
    <i class="fa fa-user" aria-hidden="true"></i>

//Header Component
const HeaderComponet = () => {
    return(
        <div className="header">
            <div>
                {Logo}
            </div>
            <div>
              <SearchBar/>
            </div>
            <div>
                <UserIcon/>
            </div>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponet/>);
