import React from "react";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import magnifyingGlass from "../../assets/images/search.svg";
import "./NotFoundStyles.scss";

function NotFound() {
  return (
    <section id="not-found">
      <Navbar />
      <div className="not-found-content">
        <div>Sorry, we can't find the page you were looking for...</div>
        <img src={magnifyingGlass} alt="magnifying glass" />
      </div>
      <Footer />
    </section>
  );
}

export default NotFound;
