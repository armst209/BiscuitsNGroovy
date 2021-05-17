import { React } from "react";
import { Link } from "react-router-dom";
import "./FPNavbarStyles.scss";

function FPNavbar() {
  return (
    <div id="fan-port-nav">
      <ul>
        <li>
          <Link to="/fanportal/home">Home</Link>
        </li>
        <li>
          <Link to="/fanportal/profile">Search</Link>
        </li>
        <li>
          <Link to="/fanportal/home">Your Library</Link>
        </li>
        <li>
          <Link to="/fanportal/home">Account</Link>
        </li>
      </ul>
    </div>
  );
}

export default FPNavbar;
