import "./UserEmailSuccessModalStyles.scss";

const UserEmailSuccessModal = () => {
  return (
    <div id="user-email-success-modal">
      <div className="user-email-success-modal-container">
        <div
          className="user-email-success-modal-close"
          onClick={() => {
            window.location.replace("/");
          }}
        >
          X
        </div>
        <h2>Check your email!</h2>
        <p>
          Follow the link in your email to reset the password to your Biscuits n
          Groovy account
        </p>
        <p>
          Didn't get an email? <a href="mailto:team@bngroovy.com">Contact Us</a>
        </p>
      </div>
    </div>
  );
};

export default UserEmailSuccessModal;
