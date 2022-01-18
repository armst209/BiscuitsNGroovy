import "./LoginAndSignUpStyles.scss";
import { Link } from "react-router-dom";
import Button from "../../WrapperComponents/Button/Button";

const LoginAndSignUp = () => {
  let token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <li className="signup-li">
      <Button className="signup-button-container _button" align="center">
        <Link className="signup-button-link" to="/signin">
          <span>Sign In</span>
        </Link>
      </Button>
    </li>
  );
};

export default LoginAndSignUp;
