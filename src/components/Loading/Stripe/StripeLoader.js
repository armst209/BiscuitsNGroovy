import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";
import styles from "./StripeLoader.module.scss";
function StripeLoader() {
  return (
    <section id={styles["stripe-loader"]}>
      <div className={styles["stripe-loader-container"]}>
        <RecordSpinner className="rotate component-loading-svg" />
        <div className={styles["stripe-loader-message-container"]}>
          <p className={styles["stripe-loader-message"]}>
            Redirecting to Stripe Checkout...
          </p>
        </div>
      </div>
    </section>
  );
}

export default StripeLoader;
