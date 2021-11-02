import "./LoginStyles.scss";
import { ReactComponent as RecordVinyl } from "../../assets/images/compact-disc-yellow.svg";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
  return (
    <section id="login-page">
      <div className="login-title">
        <h1>
          <RecordVinyl width="50px" />
          <div>LOGIN</div>
        </h1>
      </div>
      <h2>Log In to "enter message"</h2>
      <div className="login-content">
        <LoginForm />
      </div>
    </section>
  );
};

export default Login;
