import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbars/Navbar";
import magnifyingGlass from "../../assets/images/search_white.svg";
import "./NotFoundStyles.scss";

function NotFound() {
  return (
    <section id="not-found">
      <Navbar />

      <div className="not-found-content">
        <h1>Sorry, we can't find the page you were looking for...</h1>
        <img src={magnifyingGlass} alt="magnifying glass" />
      </div>
      <Footer />
    </section>
  );
}

export default NotFound;
