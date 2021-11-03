import { useState } from "react";
import axios from "axios";

const ArtistForm = () => {
  const [artistName, setArtistName] = useState("");
  const [artistPrefName, setArtistPrefName] = useState("");
  const [artistEmail, setArtistEmail] = useState("");
  const [artistPhone, setArtistPhone] = useState("");
  const [managerName, setManagerName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessages, setErrorMessages] = useState("");
  const [successMessages, setSuccessMessages] = useState("");
  const submit = (event) => {
    event.preventDefault();

    axios({
      method: "post",
      //   url: `${baseURL}/registration`,
      data: {
        artistName,
        artistPrefName,
        artistEmail,
        artistPhone,
        managerName,
        managerEmail,
        message,
      },
    })
      .then((res) => {
        setSuccessMessages("User is subscribed!");
      })
      .catch((err) => {
        setErrorMessages("");
      });
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        name="ARTISTNAME"
        placeholder="Artist Name"
        required
        autoComplete="off"
        onChange={(event) => setArtistName(event.target.value)}
      />
      <input
        type="text"
        name="PREFNAME"
        placeholder="Preferred Name"
        autoComplete="off"
        onChange={(event) => setArtistPrefName(event.target.value)}
      />
      <input
        type="email"
        name="ARTEMAIL"
        placeholder="Artist Email"
        required
        autoComplete="off"
        onChange={(event) => setArtistEmail(event.target.value)}
      />
      <input
        type="phone"
        name="ARTPHONE"
        placeholder="Phone Number"
        required
        autoComplete="off"
        onChange={(event) => setArtistPhone(event.target.value)}
      />
      <input
        type="text"
        name="MANNAME"
        placeholder="Manager/Agent Name"
        required
        autoComplete="off"
        onChange={(event) => setManagerName(event.target.value)}
      />
      <input
        type="email"
        name="MANEMAIL"
        placeholder="Manager/Agent Email"
        required
        autoComplete="off"
        onChange={(event) => setManagerEmail(event.target.value)}
      />
      <textarea
        className="text-input"
        spellCheck="true"
        rows="10"
        cols="50"
        type="text"
        name="MESSAGE"
        placeholder="Enter a message"
        required
        autoComplete="off"
        onChange={(event) => setMessage(event.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ArtistForm;
