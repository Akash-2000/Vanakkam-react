import { useContext } from "react";
import { userContext } from "./context/userContext";

const Contact = () => {
  return (
    <div>
      <p>Contact us page</p>

      <form>
        <input type="text" className="" placeholder="Enter name" />
        <input type="email" className="" placeholder="Enter email" />
        <button type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Contact;
