import "./LoginAndSignUpStyles.scss";
import { Link } from "react-router-dom";

const LoginAndSignUp = () => {
  let token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <li className="signup-li">
      <button className="signup-button-container _button" align="center">
        <Link className="signup-button-link" to="/signin">
          <span>Sign In</span>
        </Link>
      </button>
    </li>
  );
};

export default LoginAndSignUp;
