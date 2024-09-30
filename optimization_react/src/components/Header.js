import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus()
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={LOGO_URL} width={50} height={50} />
      </div>
      <div className="rightContainer">
        <ul>
          <li>Online status : {onlineStatus? "💚": "🛑"}</li>
          <li><Link    to="/"><h3>Home</h3></Link></li>
          <li><Link    to="/about"><h3>About us</h3></Link></li>
          <li><Link    to="/contact"><h3>contact us</h3></Link></li>
          <li><Link    to="/grocery"><h3>Groceries</h3></Link></li>
          <li>
            <i class="fa-solid fa-cart-shopping"></i>
          </li>
          <li>
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
