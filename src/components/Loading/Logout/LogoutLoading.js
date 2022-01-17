//react imports
import ReactDOM from "react-dom";

//styles
import "./LogoutLoading.scss";

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

const LogoutLoadingModalOverlay = () => {
  return (
    <section id="logout-loading">
      <div className="logout-loading-container">
        <div className="message">
          <p> Logging out...</p>
        </div>
        <RecordSpinner className="rotate" />
      </div>
    </section>
  );
};

const LogoutLoading = () => {
  return (
    <>
      {ReactDOM.createPortal(
        <LogoutLoadingModalOverlay />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default LogoutLoading;
