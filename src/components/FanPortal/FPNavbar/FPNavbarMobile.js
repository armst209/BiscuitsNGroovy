import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./FPNavbarMobileStyles.scss";
import dropdown from "../../../assets/images/double-down.svg";
import { CSSTransition } from "react-transition-group";

function FPNavbarMobile(props) {
  const [portNav, setPortNav] = useState(false);

  return (
    <div id="fan-port-mobile-nav">
      <div className="portal-dropdown" onClick={() => setPortNav(!portNav)}>
        {/* <span>PORTAL MENU </span> */}
        <img src={dropdown} alt="dropdown" />
      </div>
      <CSSTransition
        classNames="port-nav-mobile"
        in={portNav}
        timeout={300}
        unmountOnExit
        onEnter={() => setPortNav(true)}
        onExited={() => setPortNav(false)}
      >
        <aside className="port-nav-mobile">
          <ul>
            <li>
              <Link to="/fanportal">Home</Link>
            </li>
            <li>
              <Link to="/fanportal/profile">Profile</Link>
            </li>
            <li>
              <Link to="/fanportal">Library</Link>
            </li>
            <li>
              <Link to="/fanportal">Account</Link>
            </li>
            <li onClick={props.handleLogout}>
              <Link>Logout</Link>
            </li>
          </ul>
        </aside>
      </CSSTransition>
    </div>
  );
}

export default FPNavbarMobile;
