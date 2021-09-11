import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import "./SubscribeSectionStyles.scss";
import letter_icon from "../../assets/images/letter2_yellow.svg";
import Mailchimp from "react-mailchimp-form";

function SubscribeSection() {
  return (
    <section id="subscribe">
      <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
      <img src={letter_icon} alt="connect icon" />
      <Mailchimp
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
          duplicate: "Too many subscribe attempts for this email address",
          button: "Subscribe!",
        }}
        // Add a personalized class
        className="mailchimp-container"
      >
        <button type="submit">Subscribe</button>
      </Mailchimp>
    </section>

    //   <MailchimpSubscribe
    //     style={{
    //       display: "flex",
    //       flexDirection: "column",
    //       justifyContent: "center",
    //       alignItems: "center",
    //     }}
    //     url={process.env.REACT_APP_MAILCHIMP_URL}
    //   >
    //     <label htmlFor="email" />
    //     <input
    //       type="email"
    //       name="email"
    //       placeholder="Please enter your email"
    //       required
    //     />

    //     <button type="submit">Subscribe</button>
    //   </MailchimpSubscribe>
    // </section>
  );
}

export default SubscribeSection;
