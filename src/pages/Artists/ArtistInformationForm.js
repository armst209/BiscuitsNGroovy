import { useState, useEffect } from "react";
import FormLoader from "../../Loading/Forms/FormLoader";

const ArtistInformationForm = ({ status, message, onValidated }) => {
  const [artistName, setArtistName] = useState("");
  const [artistPrefName, setArtistPrefName] = useState("");
  const [artistEmail, setArtistEmail] = useState("");
  const [artistPhone, setArtistPhone] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [artistMessage, setArtistMessage] = useState("");

  //error handling
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [artistFormLoader, setArtistFormLoader] = useState(false);

  useEffect(() => {
    if (status === "success") {
      setArtistFormLoader(false);
      clearFields();
      setSuccessMessage(
        <div className="form-success">
          Success! Thank you for submitting your information!
        </div>
      );
    } else if (status === "error") {
      setArtistFormLoader(false);
      // setEmailInputErrorClass("input-error");
      setErrorMessage(
        <div className="form-error">{`${artistName} has already been submitted as an artist!`}</div>
      );
    } else if (status == "sending") {
      setArtistFormLoader(true);
    }
  }, [status]);

  const clearFields = () => {
    setArtistEmail("");
    setArtistName("");
    setArtistPrefName("");
    setArtistPhone("");
    setManagerName("");
    setManagerEmail("");
    setArtistMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);
    artistEmail &&
      artistName &&
      artistPrefName &&
      artistPhone &&
      managerName &&
      managerEmail &&
      artistMessage &&
      artistEmail.indexOf("@") > -1 &&
      onValidated({
        MERGE0: artistEmail,
        MERGE1: artistName,
        MERGE2: artistPrefName,
        MERGE3: artistPhone,
        MERGE4: managerName,
        MERGE5: managerEmail,
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
      <input
        label="Email"
        // ref={(node) => (email = node)}
        onChange={(e) => setArtistEmail(e.target.value)}
        type="email"
        value={artistEmail}
        placeholder="Ex: your@email.com"
        required
        autoComplete="off"
        name="MERGE0"
      />
      <input
        label="Artist Name"
        // ref={(node) => (artistName = node)}
        onChange={(e) => setArtistName(e.target.value)}
        type="text"
        value={artistName}
        placeholder="Artist Name"
        required
        name="MERGE1"
      />
      <input
        label="Artist Preferred Name"
        // ref={(node) => (artistPrefName = node)}
        onChange={(e) => setArtistPrefName(e.target.value)}
        type="text"
        value={artistPrefName}
        placeholder="Preferred Name"
        name="MERGE2"
      />

      <input
        label="Phone Number"
        // ref={(node) => (artistPhone = node)}
        onChange={(e) => setArtistPhone(e.target.value)}
        type="tel"
        value={artistPhone}
        placeholder="Ex: 111-111-1111"
        required
        name="MERGE3"
      />
      <input
        label="Manager/Agent Name"
        // ref={(node) => (managerName = node)}
        onChange={(e) => setManagerName(e.target.value)}
        type="text"
        value={managerName}
        placeholder="Manager/Agent Name"
        required
        name="MERGE4"
      />
      <input
        label="Manager/Agent Email"
        // ref={(node) => (managerEmail = node)}
        onChange={(e) => setManagerEmail(e.target.value)}
        type="email"
        value={managerEmail}
        placeholder="Ex: manageragent@email.com"
        required
        name="MERGE5"
      />
      <input
        label="Enter a message:"
        // ref={(node) => (artistMessage = node)}
        onChange={(e) => setArtistMessage(e.target.value)}
        type="text"
        value={artistMessage}
        placeholder="Enter a message:"
        required
        name="MERGE6"
      />

      <button>Submit</button>
    </form>
  );
};

export default ArtistInformationForm;
