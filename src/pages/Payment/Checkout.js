import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import ex_music_icon from "../../assets/images/love-song2.svg";
import "./CheckoutStyle.scss";
import ComponentLoading from "../../components/Loading/ComponentLoading";

import env from "react-dotenv";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

//STRIPE
const stripePromise = loadStripe(
  "pk_test_51IoVPgGQOOYUPUkxLc3Pp0Xs9aIAgNF0Ref6QStISTEd5vDwVRXbXel7xY6Ajo8Siuvmy3jPR84LnZzaQ8x7sCaw00YrlUeC94"
);

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
        productImages: [props.images],
        productPrice: parseInt(props.price * 100),
        releaseID: props.release_id,
      },
    });

    const sessionId = await response.data.id;

    // console.log(sessionId);
    // When the customer clicks on the button, redirect them to Checkout.

    props.stripeLoaderFromCO(<ComponentLoading />);
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    props.stripeLoaderFromCO("");
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
