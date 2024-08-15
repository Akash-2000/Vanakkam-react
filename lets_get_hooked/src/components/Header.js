import { LOGO_URL } from "../utils/constants";
const Header = () => {
    return (
      <div className="headerContainer">
        <div className="logoContainer">
          <img src={LOGO_URL} width={50} height={50}/>
        </div>
        <div className="rightContainer">
          <ul>
            <li>About us</li>
            <li>contact us</li>
            <li>
            <i class="fa-solid fa-cart-shopping"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header