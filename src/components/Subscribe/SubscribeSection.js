import React from "react";
import "./SubscribeSectionStyles.scss";
import connect_icon from "../../assets/images/connect.svg";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <img src={connect_icon} alt="connect icon" />
      <form action="">
        <label htmlFor="name" />
        <input type="email" name="name" placeholder="Please enter your email" />
        <label htmlFor="email" />

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default SubscribeSection;
