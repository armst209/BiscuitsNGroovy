//styles
import "./LoginAndSignUpStyles.scss";
//react redux
import { useSelector } from "react-redux";

//react imports
import { Link } from "react-router-dom";

const LoginAndSignUp = () => {

  const isUserAuthenticated = useSelector(state => state.authentication.isUserAuthenticated)

  return isUserAuthenticated ? null : (
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
