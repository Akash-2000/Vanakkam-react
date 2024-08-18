import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={LOGO_URL} width={50} height={50} />
      </div>
      <div className="rightContainer">
        <ul>
          <li><h3>About us</h3></li>
          <li><h3>contact us</h3></li>
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
