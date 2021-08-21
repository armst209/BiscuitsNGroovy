import React from "react";
import "./SubscribeSectionStyles.scss";
import letter_icon from "../../assets/images/letter2_yellow.svg";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <img src={letter_icon} alt="connect icon" />

      <form action="">
        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
          required
        />

        <button type="submit">Subscribe</button>
      </form>
    </section>
  );
}

export default SubscribeSection;
