//styles
import "./LoginAndSignUpStyles.scss";

//react imports
import { Link } from "react-router-dom";

const LoginAndSignUp = () => {

  return (
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
