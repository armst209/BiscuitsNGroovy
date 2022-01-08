// import next_arrow from "../../../assets/images/next-arrow-yellow.svg";
import "./SignUpPopUpStyles.scss";

const SignUpPopUp = ({ setShowSignUpInfo }) => {
  return (
    <section id="signup-modal">
      <div className="signup-popup-wrapper">
        <div
          onClick={() => setShowSignUpInfo(false)}
          className="signup-popup-close"
        >
          X
        </div>
        <div className="signup-popup-header">
          <h1>Create your account</h1>
        </div>

        <div className="signup-popup-content">
          <ul>
            <li>
              When you create an account with us, you’ll also be prompted to
              create a Blocto account. They’ll be linked together so you don’t
              need to remember a separate login.
            </li>
            <li>
              Blocto is a trusted, user-friendly wallet for crypto assets (like
              NFTs). Learn more{" "}
              <a
                className="blocto-link"
                href="https://blocto.portto.io/en/"
                target="_blank"
                rel="noopener noreferrer"
              >
                here
              </a>
            </li>
          </ul>
          <ol>
            <li>
              Enter your email and choose a username & password. account. Click{" "}
              <strong>Continue</strong>
            </li>

            <li>
              Enter your email again in the Blocto popup. This will create and
              link a Blocto account with your BnG account so you can easily
              access your NFTs. Click <strong>Register</strong>
            </li>
            <li>
              Enter the verification code from your email. Next, click
              <strong> Confirm</strong> to link your new Blocto account, and
              finally click <strong>Approve</strong>
            </li>
            <li>
              Now you’ll be back at the BnG sign up. Double check your info,
              then click <strong>Create Account</strong>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};
export default SignUpPopUp;
