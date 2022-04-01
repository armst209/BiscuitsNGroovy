
//styles
import "./LoginStyles.scss";
// react imports
import { Link } from "react-router-dom";

//component imports
import LoginForm from "./LoginForm/LoginForm";
// import FixedNavigationSpacer from "../../components/FixedNavigationSpacer/FixedNavigationSpacer";

//svg imports
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";

//seo imports
import SEOHelmet from "../../utils/SEO/SEOHelmet";


const Login = () => {
  return (
    <section id="login-page" className="_main_section">
      <SEOHelmet title="Sign In" content="Sign In with Biscuits n Groovy" />
      <div className="login-title">
        <h1>
          <RecordVinyl width="50px" />
          <div>Sign In</div>
        </h1>
      </div>
      <h2>Sign in with Biscuits n Groovy</h2>
      <div className="login-content">
        <LoginForm />
        <p className="have-account">
          <span>
            Don't have an account?{" "}
            <Link to="/signup" className="signup-redirect">
              Sign up
            </Link>
          </span>
        </p>
        <div className="forgot-password">
          <Link to="/password-recovery">Forgot Password?</Link>
        </div>
      </div>
    </section>

  );
};

export default Login;
