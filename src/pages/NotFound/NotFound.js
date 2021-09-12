import React from "react";
import magnifyingGlass from "../../assets/images/search_white.svg";
import "./NotFoundStyles.scss";

function NotFound() {
  return (
    <div id="not-found">
      <div className="not-found-content">
        <h1>Sorry, we can't find the page you were looking for...</h1>
        <img src={magnifyingGlass} alt="magnifying glass" />
      </div>
    </div>
  );
}

export default NotFound;
