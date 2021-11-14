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
        <p>Please check you email for reset link</p>
      </div>
    </div>
  );
};

export default UserEmailSuccessModal;
