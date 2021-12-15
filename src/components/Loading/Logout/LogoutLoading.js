import "./LogoutLoadingStyles.scss";
import { ReactComponent as RecordSpinner } from "../../../assets/images/compact-disc-yellow.svg";

function LogoutLoading() {
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
}

export default LogoutLoading;
