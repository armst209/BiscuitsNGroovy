import "./UserEmailSuccessModalStyles.scss";
import { ReactComponent as NewEmail } from "../../../assets/images/new-email.svg";

const UserEmailSuccessModal = () => {
  return (
    <div id="user-email-success-modal">
      <div className="user-email-success-modal-container">
        <div
          className="user-email-success-modal-close"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          X
        </div>
        <h1>Check your email!</h1>
        <NewEmail />
        <p className="user-email-success-modal-subtitle">
          Follow the <span>link in your email</span> to reset the password to
          your Biscuits n Groovy account
        </p>
        <p className="user-email-success-modal-no-email">
          Didn't get an email? <a href="mailto:team@bngroovy.com">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default UserEmailSuccessModal;
