import { useState, useEffect } from "react";

const ArtistInformationForm = ({ status, message, onValidated }) => {
  const [artistName, setArtistName] = useState("");
  const [artistPrefName, setArtistPrefName] = useState("");
  const [artistEmail, setArtistEmail] = useState("");
  const [artistPhone, setArtistPhone] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [artistMessage, setArtistMessage] = useState("");

  // const submit = (event) => {
  //   event.preventDefault();

  //   axios({
  //     method: "post",
  //     //   url: `${baseURL}/registration`,
  //     data: {
  //       artistName,
  //       artistPrefName,
  //       artistEmail,
  //       artistPhone,
  //       managerName,
  //       managerEmail,
  //       message,
  //     },
  //   })
  //     .then((res) => {
  //       setSuccessMessages("User is subscribed!");
  //     })
  //     .catch((err) => {
  //       setErrorMessages("");
  //     });
  // };

  useEffect(() => {
    if (status === "success") clearFields();
  }, [status]);

  const clearFields = () => {
    setArtistEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    return (
      artistEmail &&
      artistEmail.indexOf("@") > -1 &&
      onValidated({ MERGE0: artistEmail })
    );
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
        onChange={(e) => setArtistName(e.target.value)}
        type="text"
        value={artistName}
        placeholder="Artist Name"
        required
        name="MERGE1"
      />
      <input
        label="Artist Preferred Name"
        onChange={(e) => setArtistPrefName(e.target.value)}
        type="text"
        value={artistPrefName}
        placeholder="Preferred Name"
        name="MERGE2"
      />
      <input
        label="Artist Email"
        onChange={(e) => setArtistEmail(e.target.value)}
        type="email"
        value={artistEmail}
        placeholder="Ex: your@email.com"
        required
        name="MERGE0"
      />
      <input
        label="Phone Number"
        onChange={(e) => setArtistPhone(e.target.value)}
        type="tel"
        value={artistPhone}
        placeholder="Ex: 111-111-1111"
        required
        name="MERGE3"
      />
      <input
        label="Manager/Agent Name"
        onChange={(e) => setManagerName(e.target.value)}
        type="text"
        value={managerName}
        placeholder="Manager/Agent Name"
        required
        name="MERGE4"
      />
      <input
        label="Manager/Agent Email"
        onChange={(e) => setManagerEmail(e.target.value)}
        type="email"
        value={managerEmail}
        placeholder="Ex: manageragent@email.com"
        required
        name="MERGE5"
      />
      <input
        label="Enter a message:"
        onChange={(e) => setArtistMessage(e.target.value)}
        type="text"
        value={artistMessage}
        placeholder="Enter a message:"
        required
        name="MERGE6"
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default ArtistInformationForm;
