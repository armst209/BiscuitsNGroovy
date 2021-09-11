import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./SubscribeSectionStyles.scss";
import letter_icon from "../../assets/images/letter2_yellow.svg";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <img src={letter_icon} alt="connect icon" />

      <MailchimpSubscribe
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        url={process.env.REACT_APP_MAILCHIMP_URL}
      >
        <label htmlFor="email" />
        <input
          type="email"
          name="email"
          placeholder="Please enter your email"
          required
        />

        <button type="submit">Subscribe</button>
      </MailchimpSubscribe>
    </section>
  );
}

export default SubscribeSection;
