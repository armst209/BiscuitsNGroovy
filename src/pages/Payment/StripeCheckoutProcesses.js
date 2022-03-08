
//react imports
import { useState, useEffect } from "react";

//axios import
import axios from "axios";

//Stripe imports
import { loadStripe } from "@stripe/stripe-js";

//styles
import "./StripeCheckoutProcessesStyles.scss";

//utility imports
import { token } from "../../utils/UtilityVariables";

//component imports
import StripeLoader from "../../components/Loading/Stripe/StripeLoader";



// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render. ??

//STRIPE
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);


  // -------Start of Google Analytics - DON'T REMOVE-------

  // -------End of Google Analytics - DON'T REMOVE-------

const StripeCheckoutProcesses = ({ release }) => {
  const [message, setMessage] = useState("");
  const [showStripeLoader, setShowStripeLoader] = useState("");
  const { id, name, art_url, price } = release;

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
      window.location.replace(
        process.env.REACT_APP_FRONTEND_URL + "/purchase-success"
      );
    }
    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handleClick = async (event) => {
    //stripe loader placement must be here - delay if below setting of token
    setShowStripeLoader(
      <div className="stripe-loader-container">
        <StripeLoader />
      </div>
    );
    //check if a user is signed in with a FLOW wallet

    const stripe = await stripePromise;
    const URL = `${process.env.REACT_APP_BACKEND_URL}/payments/create-checkout-session`;

    const response = await axios(URL, {
      method: "POST",
      headers: {
        "x-access-token": token,
      },
      data: {
        productName: name,
        productImages: [art_url],
        productPrice: parseInt(price * 100),
        releaseID: id,
      },
    });

    const sessionId = await response.data.id;

    // When the customer clicks on the button, redirect them to Checkout.

    const result = await stripe.redirectToCheckout({
      sessionId: sessionId,
    });
    setShowStripeLoader("");
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };
  //functional component that is being rendered and displayed if there is a message
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  //functional component that is being rendered and displayed if no message
  const ProductDisplay = ({ handleClick, showStripeLoader }) => (
    <>
      <div
        type="button"
        id="checkout-button"
        role="link"
        onClick={handleClick}
        className="checkout-button"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
        }}
      >
        Buy Now
      </div>
      {showStripeLoader}
    </>
  );

  return message ? (
    <Message message={message} />
  ) : (
    
    <ProductDisplay
      handleClick={handleClick}
      showStripeLoader={showStripeLoader}
    />
  );
};

export default StripeCheckoutProcesses;
