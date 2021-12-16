import "./LoginAndSignUpStyles.scss";
import { Link } from "react-router-dom";

const LoginAndSignUp = () => {
  let token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <li className="signup-li">
      <div className="signup-button-container" align="center">
        <Link className="signup-button-link" to="/signin">
          <span>Sign In</span>
        </Link>
      </div>
    </li>
  );
};

export default LoginAndSignUp;
