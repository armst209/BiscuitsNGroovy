import { useState, useEffect } from "react";
import "./NewsLetterSubscribeStyles.scss";

const NewsLetterForm = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") clearFields();
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
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        value={email}
        placeholder="Ex: your@email.com"
        required
        name="MERGE0"
      />
      <button type="submit">Join</button>
    </form>
  );
};

export default NewsLetterForm;
