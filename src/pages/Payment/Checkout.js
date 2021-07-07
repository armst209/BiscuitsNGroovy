import React, { useState, useEffect } from "react";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { assertExistsTypeAnnotation } from "@babel/types";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

//Releases Request
// const baseURL = "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080";
// const token = localStorage.getItem("token");

// const handleSuccess = (res) => {
//   console.log(res.data.releases);
// };

// const handleFailure = (err) => {
//   console.log(err);
// };

// axios({
//   method: "get",
//   url: `${baseURL}/releases`,
//   token: token,
//   //need to get individual users ID through request to show unique library/purchases
//   // data: { token: token },
// })
//   .then((res) => {
//     handleSuccess(res);
//   })
//   .catch((err) => {
//     handleFailure(err);
//   });

//STRIPE
const stripePromise = loadStripe(
  "pk_test_51IoVPgGQOOYUPUkxLc3Pp0Xs9aIAgNF0Ref6QStISTEd5vDwVRXbXel7xY6Ajo8Siuvmy3jPR84LnZzaQ8x7sCaw00YrlUeC94"
);

const productImages = [
  "https://bng-resources.s3.us-east-2.amazonaws.com/5/art/808s_%26_Heartbreak.png",
];
console.log(productImages[0]);
const productPrice = 10.0;
const productName = "Kanye Album";
const ProductDisplay = ({ handleClick, props }) => (
  <section>
    <div className="product">
      {/* <img src={productImages[0]} alt="product" />
      <div className="description">
        <h5>${productPrice}</h5>
        <h5>${productName}</h5>
      </div> */}
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

export default function CheckoutButton(props) {
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

    //check if a user is signed in with a FLOW wallet

    const stripe = await stripePromise;
    const URL =
      "http://ec2-18-220-73-140.us-east-2.compute.amazonaws.com:8080/payments/create-checkout-session";

    console.log(props.name);
    console.log(props.images);
    console.log(props.price);
    const response = await axios(URL, {
      method: "POST",
      data: {
        productName: props.name,
        productImages: props.images,
        productPrice: parseInt(props.price*100),
        releaseID: props.release_id,
      },
    });
    const sessionId = await response.data.id;

    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
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
    <ProductDisplay handleClick={handleClick} props={props} />
  );
}
