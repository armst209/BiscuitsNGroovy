import { useState } from "react";
import "./PasswordResetStyles.scss";
import "../../../customHooks/Validation/useValidationStyles.scss";
import PasswordResetForm from "./PasswordResetForm";
import PasswordRecoverySuccessModal from "../Modals/PasswordRecoverySuccessModal";

const PasswordReset = () => {
  const [passwordResetSuccessModal, setPasswordResetSuccessModal] =
    useState(false);

  return (
    <section id="password-recovery">
      <div className="password-recovery-title">
        <h1>PASSWORD RESET</h1>
      </div>

      <PasswordResetForm
        passwordResetSuccessModal={passwordResetSuccessModal}
        setPasswordResetSuccessModal={setPasswordResetSuccessModal}
      />
      {passwordResetSuccessModal && <PasswordRecoverySuccessModal />}
    </section>
  );
};

export default PasswordReset;
