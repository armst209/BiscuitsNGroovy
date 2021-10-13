import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import ex_music_icon from "../../assets/images/love-song2.svg";
import "./CheckoutStyle.scss";
import StripeLoader from "../../components/Loading/StripeLoader";
import env from "react-dotenv";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

//STRIPE
const stripePromise = loadStripe(env.STRIPE_API_KEY);

const ProductDisplay = ({ handleClick }) => (
  <section>
    <button
      type="button"
      id="checkout-button"
      role="link"
      onClick={handleClick}
      className="checkout-button"
    >
      BUY NOW <img src={ex_music_icon} alt="heart music icon" />
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CheckoutButton(props) {
  console.log(props);
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      window.location.replace(env.FRONTEND_URL + "/purchase-success");
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    //stripe loader placement must be here - delay if below setting of token
    props.setStripeLoader(
      <div className="stripe-loader-container">
        <StripeLoader />
      </div>
    );
    //check if a user is signed in with a FLOW wallet
    const token = localStorage.getItem("token");

    const stripe = await stripePromise;
    const URL = `${env.BACKEND_URL}/payments/create-checkout-session`;

    const response = await axios(URL, {
      method: "POST",
      headers: {
        "x-access-token": token,
      },
      data: {
        productName: props.name,
        productImages: [props.albumCover],
        productPrice: parseInt(props.price * 100),
        releaseID: props.id,
      },
    });

    const sessionId = await response.data.id;

    // When the customer clicks on the button, redirect them to Checkout.

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    props.setStripeLoader("");
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} props={props} />
  );
}
