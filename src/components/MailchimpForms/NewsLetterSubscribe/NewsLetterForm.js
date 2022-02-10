//react imports
import { useState, useEffect } from "react";
import useValidation from "../../../customHooks/Validation/useValidation";

//styles
import "../../../customHooks/Validation/useValidationStyles.scss";
import "./NewsLetterSubscribeStyles.scss";

//component imports
import FormLoader from "../../Loading/Forms/FormLoader";

//svg imports
import { ReactComponent as ValidationSuccess } from "../../../assets/images/check.svg";


const NewsLetterForm = ({ status, message, onValidated }) => {
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [newsletterLoader, setNewsletterLoader] = useState(false);

  const {
    email,
    emailInputLoginClass,
    emailErrorMessage,
    showEmailValidationCheck,
    setShowEmailValidationCheck,
    setEmailInputLoginClass,
    setEmail,
    inputValidation,
  } = useValidation();


  useEffect(() => {

      
  const clearFields = () => {
    setEmail("");
  };


    if (status === "success") {
      setNewsletterLoader(false);
      clearFields();
      setShowEmailValidationCheck(false);
      setSuccessMessage(
        <div className="form-success">Success! Thank you for subscribing!</div>
      );
      setEmailInputLoginClass("");
      setErrorMessage("");
    } else if (status === "error") {
      setNewsletterLoader(false);
      setShowEmailValidationCheck(false);
      setEmailInputLoginClass("input-error");
      setErrorMessage(
        <div className="form-error">{`${email} is already subscribed!`}</div>
      );
      setSuccessMessage("");
    } else if (status === "sending") {
      setNewsletterLoader(true);
    }
  }, [status, email,setEmailInputLoginClass,setShowEmailValidationCheck, setEmail]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
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
      <fieldset className="input-styles">
        <label
          className="label-error-message email-label"
          htmlFor="newsletter-email"
        >
          {emailErrorMessage}
        </label>
        <input
          id="newsletter-email"
          className={emailInputLoginClass}
          onChange={inputValidation}
          type="email"
          placeholder="Ex: your@email.com"
          autoComplete="off"
          required
          name="MERGE0"
        />
        {/* check icon */}
        {showEmailValidationCheck && (
          <ValidationSuccess className="valid-check-icon newsletter-email-check" />
        )}

        <button
          className="newsletter-form-button-container _button"
          type="submit"
        >
          <div className="newsletter-form-button-link">
            <span>Join</span>
          </div>
        </button>
      </fieldset>
    </form>
  );
};

export default NewsLetterForm;
