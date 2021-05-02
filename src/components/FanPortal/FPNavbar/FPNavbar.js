import React from "react";
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
          <Link to="/fanportal/profile">Profile</Link>
        </li>
        <li>
          <Link to="/fanportal/home">Home</Link>
        </li>
        <li>
          <Link to="/fanportal/home">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default FPNavbar;
