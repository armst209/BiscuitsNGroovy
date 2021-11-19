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
      <h2>Issues logging in?/Password reset</h2>

      <p className="user-email-subtitle">
        "blurb about what we need from user and about the email well send"
      </p>

      <div className="user-email-wrapper">
        <UserEmailForm
          setShowEmailLoader={setShowEmailLoader}
          setEmailErrorMessage={setEmailErrorMessage}
          setSuccessMessage={setSuccessMessage}
          showPassRecoveryModal={showPassRecoveryModal}
          setShowPassRecoveryModal={setShowPassRecoveryModal}
        />
        <p className="user-email-contact-issue">
          Still having issues? <a href="mailto:team@bngroovy.com">Contact Us</a>
        </p>
        {showEmailLoader && <ComponentLoading />}
        {showPassRecoveryModal && <UserEmailSuccessModal />}
        <div className="user-email-error-messages">{emailErrorMessage}</div>
        <div className="user-email-success-message">{successMessage}</div>
      </div>
    </section>
  );
};

export default UserEmail;
