import { useState, useEffect } from "react";
import useValidation from "../../../customHooks/Validation/useValidation";
import "../../../customHooks/Validation/useValidationStyles.scss";
import FormLoader from "../../Loading/Forms/FormLoader";
import { ReactComponent as ValidationSuccess } from "../../../assets/images/check.svg";

const ArtistInformationForm = ({ status, message, onValidated }) => {
  const [artistName, setArtistName] = useState("");
  const [artistPrefName, setArtistPrefName] = useState("");
  const [artistPhone, setArtistPhone] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [artistMessage, setArtistMessage] = useState("");

  //error handling
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [artistFormLoader, setArtistFormLoader] = useState(false);

  const {
    email,
    setEmail,
    emailErrorMessage,
    emailInputLoginClass,
    showNewsletterArtistEmailValidationCheck,
    setShowNewsletterArtistEmailValidationCheck,
    setEmailInputLoginClass,
    inputValidation,
  } = useValidation();

  useEffect(() => {
    if (status === "success") {
      setArtistFormLoader(false);
      clearFields();
      setShowNewsletterArtistEmailValidationCheck(false);
      setSuccessMessage(
        <div className="form-success">
          Success! Someone from our team will be reaching out to you shortly!
          Thank you!
        </div>
      );
      setEmailInputLoginClass("");
      setErrorMessage("");
    } else if (status === "error") {
      setArtistFormLoader(false);
      setShowNewsletterArtistEmailValidationCheck(false);
      setEmailInputLoginClass("input-error");
      setErrorMessage(
        <div className="form-error">{`${email} is already registered as an artist!`}</div>
      );
      setSuccessMessage("");
    } else if (status === "sending") {
      setArtistFormLoader(true);
    }
  }, [status]);

  const clearFields = () => {
    setEmail("");
    setArtistName("");
    setArtistPrefName("");
    setArtistPhone("");
    setManagerName("");
    setManagerEmail("");
    setArtistMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);

    artistName &&
      // artistPrefName &&
      // artistPhone &&
      // managerName &&
      // managerEmail &&
      artistMessage &&
      email &&
      onValidated({
        MERGE0: email,
        MERGE1: artistName,
        // MERGE2: artistPrefName,
        // MERGE3: artistPhone,
        // MERGE4: managerName,
        // MERGE5: managerEmail,
        MERGE6: artistMessage,
      });
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      {/* error,success & loading messages */}
      {errorMessage}
      {successMessage}
      {artistFormLoader && <FormLoader />}
      {/* error,success & loading messages */}
      <fieldset className="input-styles">
        <label
          className="label-error-message artist-email-label"
          htmlFor="artist-email"
        >
          {emailErrorMessage}
        </label>
        <input
          className={emailInputLoginClass}
          onChange={inputValidation}
          id="artist-email"
          type="email"
          placeholder="Ex: your@email.com"
          required
          autoComplete="off"
          name="MERGE0"
        />
        {/* check icon */}
        {showNewsletterArtistEmailValidationCheck && (
          <ValidationSuccess className="valid-check-icon email-check" />
        )}
        <label
          className="label-error-message artist-name-label"
          htmlFor="artist-name"
        >
          Artist Name
        </label>
        <input
          id="artist-name"
          onChange={(e) => setArtistName(e.target.value)}
          type="text"
          value={artistName}
          placeholder="Artist Name"
          required
          name="MERGE1"
        />
        <input
          id="artist-name"
          label="Artist Preferred Name"
          onChange={(e) => setArtistPrefName((e.target.value = "nodata"))}
          type="hidden"
          value={artistPrefName}
          placeholder="Preferred Name"
          name="MERGE2"
        />
        <input
          label="Phone Number"
          onChange={(e) => setArtistPhone(e.target.value)}
          type="hidden"
          value={artistPhone}
          placeholder="Ex: 111-111-1111"
          required
          name="MERGE3"
        />
        <input
          label="Manager/Agent Name"
          onChange={(e) => setManagerName(e.target.value)}
          type="hidden"
          value={managerName}
          placeholder="Manager/Agent Name"
          required
          name="MERGE4"
        />
        <input
          label="Manager/Agent Email"
          onChange={(e) => setManagerEmail(e.target.value)}
          type="hidden"
          value={managerEmail}
          placeholder="Ex: manageragent@email.com"
          required
          name="MERGE5"
        />
        <label
          className="label-error-message artist-message-label"
          htmlFor="artist-message"
        >
          Enter a message:
        </label>
        <textarea
          id="artist-message"
          onChange={(e) => setArtistMessage(e.target.value)}
          type="text"
          value={artistMessage}
          placeholder="Enter a message:"
          required
          name="MERGE6"
        />
        <button type="submit">Submit Artist Info</button>
      </fieldset>
    </form>
  );
};

export default ArtistInformationForm;
