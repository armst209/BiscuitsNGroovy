import React from "react";
import "./SubscribeSectionStyles.scss";
import connect_icon from "../../assets/images/connect.svg";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>KEEP IN TOUCH WITH US</h1>
      <form action="">
        <label htmlFor="name" />
        <input type="email" name="name" placeholder="Please enter your email" />
        <label htmlFor="email" />

        <button type="submit">
          Subscribe <img src={connect_icon} alt="connect icon" />
        </button>
      </form>
    </section>
  );
}

export default SubscribeSection;
