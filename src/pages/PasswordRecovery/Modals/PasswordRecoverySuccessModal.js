import "./PasswordRecoverySuccessModalStyles.scss";
import { useNavigate } from "react-router-dom";

const PasswordRecoverySuccessModal = () => {
  const navigateTo = useNavigate();
  return (
    <div id="password-recovery-success-modal">
      <div className="password-recovery-success-modal-container">
        <div
          className="password-recovery-success-modal-close"
          onClick={() => {
            navigateTo("/", { replace: true });
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
