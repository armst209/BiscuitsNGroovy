import React from "react";
import "./SubscribeSectionStyles.scss";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>KEEP IN TOUCH WITH US</h1>
      <form action="">
        <label htmlFor="name" />
        <input type="text" name="name" placeholder="Please enter your name" />
        <label htmlFor="email" />

        <button type="submit">SUBSCRIBE</button>
      </form>
    </section>
  );
}

export default SubscribeSection;
