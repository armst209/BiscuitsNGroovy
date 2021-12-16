import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import "./StripeLoadingStyles.scss";
function StripeLoader() {
  return (
    <section id="stripe-loader">
      <div className="stripe-container">
        <RecordSpinner />
        <div className="message">
          <p> Redirecting to Stripe Checkout...</p>
        </div>
      </div>
    </section>
  );
}

export default StripeLoader;
