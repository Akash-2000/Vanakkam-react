import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { userContext } from "./context/userContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();
  // const [username, setUsername] = useContext(userContext);
  // const useCont = useContext(userContext);
  // console.log(useCont, "my use", setUsername);
  const cartItem = useSelector((store) => store.cart.cartItem);

  return (
    <div className="flex bg-green-200 shadow-xl justify-between">
      <div>
        <img className="w-20 h-20" src={LOGO_URL} width={50} height={50} />
      </div>
      <div>
        <ul className="flex">
          <li className="m-4 p-2 font-light">
            Online status : {onlineStatus ? "💚" : "🛑"}
          </li>
          <li className="m-4 p-2 font-light">
            <Link to="/">
              <h3>Home</h3>
            </Link>
          </li>
          <li className="m-4 p-2 font-light">
            <Link to="/about">
              <h3>About us</h3>
            </Link>
          </li>
          <li className="m-4 p-2 font-light">
            <Link to="/contact">
              <h3>contact us</h3>
            </Link>
          </li>
          <li className="m-4 p-2 font-light">
            <Link to="/grocery">
              <h3>Groceries</h3>
            </Link>
          </li>
          <li className="m-4 p-2 font-light">
            <Link to="/cart">
              <span className="ml-1">cart - {cartItem?.length}</span>
            </Link>
          </li>
          <li className="m-4 p-2 font-light">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login"
                  ? setbtnNameReact("Logout")
                  : setbtnNameReact("Login");
                // const name = username.length > 1 ? "" : "akash";
                // setUsername(name);
              }}
            >
              {btnNameReact}
            </button>
          </li>
          {/* <li className="m-4 p-2 font-light">{username}</li> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
