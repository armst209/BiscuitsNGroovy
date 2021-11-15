import "./LoginAndSignUpStyles.scss";
import { NavLink, Link } from "react-router-dom";

const LoginAndSignUp = () => {
  let token = localStorage.getItem("token");
  return token ? (
    ""
  ) : (
    <>
      <li>
        <NavLink
          activeStyle={{
            borderBottom: "4px solid var(--color1)",
          }}
          to="/login"
        >
          Login
        </NavLink>
      </li>
      <li className="signup-li">
        <div className="signup-button-container" align="center">
          <Link className="signup-button-link" to="/signup">
            <span>Sign Up</span>
          </Link>
        </div>
      </li>
    </>
  );
};

export default LoginAndSignUp;
