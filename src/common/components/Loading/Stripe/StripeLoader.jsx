//react imports
import ReactDOM from "react-dom"

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

//styles
import styles from "./StripeLoader.module.scss";

const StripeLoaderModal = () => {
  return (
    <div id={styles["stripe-loader"]}>
      <div className={styles["stripe-loader-container"]}>
        <RecordSpinner className="rotate component-loading-svg" />
        <div className={styles["stripe-loader-message-container"]}>
          <p className={styles["stripe-loader-message"]}>
            Redirecting to Stripe Checkout...
          </p>
        </div>
      </div>
    </div>
  )
}

const StripeLoader = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <StripeLoaderModal />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
}

export default StripeLoader;
