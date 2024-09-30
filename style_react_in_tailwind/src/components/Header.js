import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="flex bg-purple-300 justify-between">
      <div>
        <img className="w-20 h-20" src={LOGO_URL} width={50} height={50} />
      </div>
      <div>
        <ul className="flex">
          <li className="m-4 p-2 font-light">Online status : {onlineStatus? "💚": "🛑"}</li>
          <li className="m-4 p-2 font-light"><Link    to="/"><h3>Home</h3></Link></li>
          <li className="m-4 p-2 font-light"><Link    to="/about"><h3>About us</h3></Link></li>
          <li className="m-4 p-2 font-light"><Link    to="/contact"><h3>contact us</h3></Link></li>
          <li className="m-4 p-2 font-light"><Link    to="/grocery"><h3>Groceries</h3></Link></li>
          <li className="m-4 p-2 font-light">
                        <i class="fa-solid fa-cart-shopping"></i>
            <span className="ml-1">cart</span>
          </li>
          <li className="m-4 p-2 font-light">
            <button
              className="login"
              onClick={() => {
                btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login") 
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
