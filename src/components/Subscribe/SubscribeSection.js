import React from "react";
import "./SubscribeSectionStyles.scss";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>KEEP IN TOUCH WITH US</h1>
      <form action="">
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
        />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  );
}

export default SubscribeSection;
