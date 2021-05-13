import { React, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./FPNavbarStyles.scss";

function FPNavbar() {
  console.log(window);
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });

  let navbarClasses = ["nav"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <div id="fan-port-nav" className={navbarClasses.join(" ")}>
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
