import { useState, useEffect } from "react";

const ArtistInformationForm = ({ status, message, onValidated }) => {
  // const [artistName, setArtistName] = useState("");
  // const [artistPrefName, setArtistPrefName] = useState("");
  // const [artistEmail, setArtistEmail] = useState("");
  // const [artistPhone, setArtistPhone] = useState("");
  // const [managerName, setManagerName] = useState("");
  // const [managerEmail, setManagerEmail] = useState("");
  // const [artistMessage, setArtistMessage] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    // setArtistEmail("");
  };
  let artistEmail,
    artistName,
    artistPrefName,
    artistPhone,
    managerName,
    managerEmail,
    artistMessage;

  const handleSubmit = () => {
    localStorage.setItem("hit", "hit");
    return (
      artistEmail &&
      artistName &&
      artistPrefName &&
      artistPhone &&
      managerName &&
      managerEmail &&
      artistMessage &&
      artistEmail.indexOf("@") > -1 &&
      onValidated({
        EMAIL: artistEmail,
        ARTNAME: artistName,
        PREFNAME: artistPrefName,
        PNUMBER: artistPhone,
        MANAME: managerName,
        MAEMAIL: managerEmail,
        MESSAGE: artistMessage,
      })
    );
  };
  return (
    <form>
      <div>
        {status === "success" ? (
          <div className="form-success">
            Success! Thank you for subscribing!
          </div>
        ) : (
          ""
        )}
      </div>

      {status === "error" && (
        <div className="form-error">Email already Subscribed!</div>
      )}
      <input
        label="Artist Name"
        ref={(node) => (artistName = node)}
        // onChange={(e) => setArtistName(e.target.value)}
        type="text"
        value={artistName}
        placeholder="Artist Name"
        required
        name="ARTNAME"
      />
      <input
        label="Artist Preferred Name"
        ref={(node) => (artistPrefName = node)}
        // onChange={(e) => setArtistPrefName(e.target.value)}
        type="text"
        value={artistPrefName}
        placeholder="Preferred Name"
        name="PREFNAME"
      />
      <input
        label="Artist Email"
        ref={(node) => (artistEmail = node)}
        // onChange={(e) => setArtistEmail(e.target.value)}
        type="email"
        value={artistEmail}
        placeholder="Ex: your@email.com"
        required
        name="EMAIL"
      />
      <input
        label="Phone Number"
        ref={(node) => (artistPhone = node)}
        // onChange={(e) => setArtistPhone(e.target.value)}
        type="tel"
        value={artistPhone}
        placeholder="Ex: 111-111-1111"
        required
        name="PNUMBER"
      />
      <input
        label="Manager/Agent Name"
        ref={(node) => (managerName = node)}
        // onChange={(e) => setManagerName(e.target.value)}
        type="text"
        value={managerName}
        placeholder="Manager/Agent Name"
        required
        name="MANAME"
      />
      <input
        label="Manager/Agent Email"
        ref={(node) => (artistEmail = node)}
        // onChange={(e) => setManagerEmail(e.target.value)}
        type="email"
        value={managerEmail}
        placeholder="Ex: manageragent@email.com"
        required
        name="MAEMAIL"
      />
      <input
        label="Enter a message:"
        ref={(node) => (artistMessage = node)}
        // onChange={(e) => setArtistMessage(e.target.value)}
        type="text"
        value={artistMessage}
        placeholder="Enter a message:"
        required
        name="MESSAGE"
      />

      <button name="submit" type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

export default ArtistInformationForm;
