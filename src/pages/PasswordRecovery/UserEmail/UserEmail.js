import { useState } from "react";
import FormLoader from "../../../components/Loading/Forms/FormLoader";
import UserEmailSuccessModal from "../Modals/UserEmailSuccessModal";
import UserEmailForm from "./UserEmailForm";
import "./UserEmailStyles.scss";

const UserEmail = () => {
  const [showEmailLoader, setShowEmailLoader] = useState(false);
  const [showPassRecoveryModal, setShowPassRecoveryModal] = useState(false);

  return (
    <section id="user-email">
      <h2>Issues logging in? Reset Your Password</h2>

      <p className="user-email-subtitle">
        {/* "blurb about what we need from user and about the email well send" */}
      </p>

      <div className="user-email-wrapper">
        <UserEmailForm
          setShowEmailLoader={setShowEmailLoader}
          showPassRecoveryModal={showPassRecoveryModal}
          setShowPassRecoveryModal={setShowPassRecoveryModal}
        />
        <p className="user-email-contact-issue">
          Still having issues? <a href="mailto:team@bngroovy.com">Contact Us</a>
        </p>
        {showEmailLoader && <FormLoader />}
        {showPassRecoveryModal && <UserEmailSuccessModal />}
      </div>
    </section>
  );
};

export default UserEmail;
