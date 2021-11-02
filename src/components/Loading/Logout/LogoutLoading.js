import "./LogoutLoadingStyles.scss";
import { ReactComponent as PulseLoader } from "../../../assets/images/pulse_loader.svg";

function LogoutLoading() {
  return (
    <section id="logout-loading">
      <div className="logout-loading-container">
        <div className="message">
          <p> Logging out...</p>
        </div>
        <PulseLoader />
      </div>
    </section>
  );
}

export default LogoutLoading;
