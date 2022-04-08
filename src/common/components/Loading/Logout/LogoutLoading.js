//react imports
import ReactDOM from "react-dom";

//styles
import "./LogoutLoading.scss";

//svg imports
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

const LogoutLoadingModal = () => {
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
        <LogoutLoadingModal />,
        document.getElementById("modal-overlay-root")
      )}
    </>
  );
};

export default LogoutLoading;
