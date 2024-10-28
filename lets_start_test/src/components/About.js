import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("about constructor is called");
  }
  componentDidMount() {
    console.log("parent did mount is called");
  }
  render() {
    console.log("about render method is called");
    return (
      <div>
        <h1>About us page</h1>
        <UserClass name={"First class"} location={"japan"} />
      </div>
    );
  }
}

export default About;

/**
 * parent constructor
 * parent render
 * frist constructor
 * friest redmer
 * second constructor
 * second render
 * COMMIT PHASE STARTED
 * firs did mount
 * second did moubnt
 * parent did mount
 */
