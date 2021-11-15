import { useState } from "react";
import "./PasswordResetStyles.scss";

import PasswordResetForm from "./PasswordResetForm";
import PasswordRecoverySuccessModal from "../Modals/PasswordRecoverySuccessModal";

const PasswordReset = () => {
  const [passwordResetSuccessModal, setPasswordResetSuccessModal] =
    useState(false);

  return (
    <section id="password-recovery">
      <div className="password-recovery-title">
        <h1>PASSWORD RECOVERY</h1>
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
