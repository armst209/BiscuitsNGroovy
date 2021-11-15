import "./PasswordRecoverySuccessModalStyles.scss";
import { Redirect } from "react-router";

const PasswordRecoverySuccessModal = () => {
  return (
    <div id="password-recovery-success-modal">
      <div className="password-recovery-success-modal-container">
        <div
          className="password-recovery-success-modal-close"
          onClick={() => {
            <Redirect to="/" />;
          }}
        >
          X
        </div>
        <p>Your password has been changed!</p>
      </div>
    </div>
  );
};

export default PasswordRecoverySuccessModal;
