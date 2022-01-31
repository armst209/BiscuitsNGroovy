import "./PasswordRecoverySuccessModalStyles.scss";
import { useHistory } from "react-router-dom";

const PasswordRecoverySuccessModal = () => {
  const history = useHistory();
  return (
    <div id="password-recovery-success-modal">
      <div className="password-recovery-success-modal-container">
        <div
          className="password-recovery-success-modal-close"
          onClick={() => {
            history.push("/");
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
