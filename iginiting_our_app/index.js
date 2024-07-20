import React from "react"
import ReactDOM from 'react-dom/client'
/**
 * 
 * //parent task - 1 
 * <div id= "parent">
 *      <div id="child">
 *          <h1>Hello world</h1>
 *      </div>
 * </div>
 * 
 *  //parent task - 2 
 * <div id= "parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *          <h2>Im h2 tag</h2>
 *      </div>
 * </div>
 *  
 *  //parent task - 3 
 * <div id= "parent">
 *      <div id="child">
 *          <h1>Im h1 tag</h1>
 *          <h2>Im h2 tag</h2>
 *      </div>
 *   <div id="child2">
 *          <h1>Im h1 tag</h1>
 *          <h2>Im h2 tag</h2>
 *      </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 * 
 */

const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id: "child"}, React.createElement("h1",{}, "im h1 tage")) )

const parent2 = React.createElement("div", {id:"parent"}, React.createElement("div", {id: "child"}, [React.createElement("h1",{}, "im h1 tage"), React.createElement("h2",{}, "im h2 tage")]) )

const parent3 = React.createElement("div", {id:"parent"}, [React.createElement("div", {id: "child"}, [React.createElement("h1",{}, "im h1 tage"), React.createElement("h2",{}, "im h2 tage")]), React.createElement("div", {id: "child2"}, [React.createElement("h1",{}, "im h1 tage"), React.createElement("h2",{}, "im h2 tage")])] )

//create an element in react
 const heading = React.createElement("h2", {
    id: "heading",
    akash:"ak"
 }, "hello world from react by akash")
       
 //create a root to render it comes from ReactDOM
 const root = ReactDOM.createRoot(document.getElementById("root"))

 //render root
 root.render(parent3)