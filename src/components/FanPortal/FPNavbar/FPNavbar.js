import { React } from "react";
import { Link } from "react-router-dom";
import "./FPNavbarStyles.scss";

function FPNavbar(props) {
  console.log(props);

  return (
    <div id="fan-port-nav">
      <ul>
        <li>
          <Link to="/fanportal">Home</Link>
        </li>
        <li>
          <Link to="/fanportal/profile">Search</Link>
        </li>
        <li>
          <Link to="/fanportal">Your Library</Link>
        </li>
        <li>
          <Link to="/fanportal">Account</Link>
        </li>
        <li>
          <button onClick={props.handleLogout}>Logout</button>
        </li>
      </ul>
    </div>
  );
}

export default FPNavbar;
