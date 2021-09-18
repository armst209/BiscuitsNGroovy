import React, { useState } from "react";
import axios from "axios";

// import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./SubscribeSectionStyles.scss";
import letter_icon from "../../assets/images/letter2_yellow.svg";
// import Mailchimp from "react-mailchimp-form";
import env from "react-dotenv";

function SubscribeSection() {
  const [email, setEmail] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [successMessages, setSuccessMessages] = useState("");
  const [isReset, setIsReset] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    const baseURL = env.BACKEND_URL;

    axios({
      method: "post",
      url: `${baseURL}/subscribeToMailingList`,
      data: {
        email,
      },
    })
      .then((res) => {
        setSuccessMessages("Subscribed!");
        setErrorMessages("");
      })
      .catch((err) => {
        setIsReset(true);
        document.getElementById("sub-form").reset();
        setErrorMessages("Email is already subscribed.");
        setSuccessMessages("");
      });
  };
  return (
    <section id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <img src={letter_icon} alt="connect icon" />
      <form id="sub-form" reset={isReset} onSubmit={submit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <button type="submit">Subscribe</button>
        <div className="messages-sub">
          <p className="error-message">{errorMessages}</p>
          <p className="success-message">{successMessages}</p>
        </div>
      </form>
      {/* <Mailchimp
        action={process.env.REACT_APP_MAILCHIMP_URL}
        //Adding multiple fields:
        fields={[
          {
            name: "EMAIL",
            placeholder: "Email",
            type: "email",
            required: true,
          },
        ]}
        // Change predetermined language
        messages={{
          sending: "Sending...",
          success: "Thank you for subscribing!",
          error: "An unexpected internal error has occurred.",
          empty: "You must write an e-mail.",
          duplicate: "Email is already subscribed",
          button: "Subscribe!",
        }}
        // Add a personalized class
        className="mailchimp-container"
      >
        <button type="submit">Subscribe</button>
      </Mailchimp> */}
    </section>
  );
}

export default SubscribeSection;
