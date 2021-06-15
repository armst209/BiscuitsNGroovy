import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IoVPgGQOOYUPUkxLc3Pp0Xs9aIAgNF0Ref6QStISTEd5vDwVRXbXel7xY6Ajo8Siuvmy3jPR84LnZzaQ8x7sCaw00YrlUeC94"
);

const ProductDisplay = ({ handleClick, product }) => (
  <section>
    <div className="product">
      <img src={product.img} alt="product" />
      <div className="description">
        <h5>${product.price}</h5>
      </div>
    </div>
    <button
      type="button"
      id="checkout-button"
      role="link"
      onClick={handleClick}
    >
      Checkout
    </button>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function CheckoutButton(product) {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    const stripe = await stripePromise;
    const URL =
      "ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080/create-checkout-session";
    const response = await fetch(URL, {
      method: "POST",
    });

    const session = await response.json();

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };

  return message ? (
    <Message message={message} />
  ) : (
    <ProductDisplay handleClick={handleClick} product={product} />
  );
}
