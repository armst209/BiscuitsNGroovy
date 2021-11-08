import { useState } from "react";
import ComponentLoading from "../../../components/Loading/Component/ComponentLoading";
import UserEmailForm from "./UserEmailForm";
import "./UserEmailStyles.scss";

const UserEmail = () => {
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showEmailLoader, setShowEmailLoader] = useState(false);

  return (
    <section id="user-email">
      <div className="user-email-wrapper">
        <UserEmailForm
          setShowEmailLoader={setShowEmailLoader}
          setEmailErrorMessage={setEmailErrorMessage}
          setSuccessMessage={setSuccessMessage}
        />
        {showEmailLoader && <ComponentLoading />}
        <div className="user-email-error-messages">{emailErrorMessage}</div>
        <div className="user-email-success-message">{successMessage}</div>
      </div>
    </section>
  );
};

export default UserEmail;
