import { useState } from "react";
import ComponentLoading from "../../../components/Loading/Component/ComponentLoading";
import UserEmailSuccessModal from "../Modals/UserEmailSuccessModal";
import UserEmailForm from "./UserEmailForm";
import "./UserEmailStyles.scss";

const UserEmail = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showEmailLoader, setShowEmailLoader] = useState(false);
  const [showPassRecoveryModal, setShowPassRecoveryModal] = useState(false);

  return (
    <section id="user-email">
      <div className="user-email-wrapper">
        <UserEmailForm
          setShowEmailLoader={setShowEmailLoader}
          setEmailErrorMessage={setEmailErrorMessage}
          setSuccessMessage={setSuccessMessage}
          showPassRecoveryModal={showPassRecoveryModal}
          setShowPassRecoveryModal={setShowPassRecoveryModal}
        />
        {showEmailLoader && <ComponentLoading />}
        {showPassRecoveryModal && <UserEmailSuccessModal />}
        <div className="user-email-error-messages">{emailErrorMessage}</div>
        <div className="user-email-success-message">{successMessage}</div>
      </div>
    </section>
  );
};

export default UserEmail;
