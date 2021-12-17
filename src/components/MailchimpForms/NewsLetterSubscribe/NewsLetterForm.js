import { useState, useEffect } from "react";
import FormLoader from "../../Loading/Forms/FormLoader";
import "./NewsLetterSubscribeStyles.scss";

const NewsLetterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");
  const [emailInputErrorClass, setEmailInputErrorClass] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [newsletterLoader, setNewsletterLoader] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setNewsletterLoader(false);
      clearFields();
      setSuccessMessage(
        <div className="form-success">Success! Thank you for subscribing!</div>
      );
      setEmailInputErrorClass("");
      setErrorMessage("");
    } else if (status === "error") {
      setNewsletterLoader(false);
      setEmailInputErrorClass("input-error");
      setErrorMessage(
        <div className="form-error">{`${email} is already subscribed!`}</div>
      );
      setSuccessMessage("");
    } else if (status === "sending") {
      setNewsletterLoader(true);
    }
  }, [status]);

  const clearFields = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        MERGE0: email,
      });
  };

  return (
    <form id="newsletter-form" onSubmit={(e) => handleSubmit(e)}>
      {/* error,success & loading messages */}
      {errorMessage}
      {successMessage}
      {newsletterLoader && <FormLoader />}
      {/* error,success & loading messages */}
      <input
        label="Email"
        className={emailInputErrorClass}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        placeholder="Ex: your@email.com"
        autoComplete="off"
        required
        name="MERGE0"
      />
      <button type="submit">Join</button>
    </form>
  );
};

export default NewsLetterForm;
