import "./PasswordRecoveryStyles.scss";
import { useLocation, useRouteMatch } from "react-router-dom";
import PassRecoveryForm from "./PassRecoveryForm";

const PasswordRecovery = () => {
  let { path } = useRouteMatch();
  let query = new URLSearchParams(useLocation().search);

  return (
    <section id="password-recovery">
      <div className="password-recovery-title">
        <h1>PASSWORD RECOVERY</h1>
      </div>

      <PassRecoveryForm userTokenId={query.get("userTokenId")} />
    </section>
  );
};

export default PasswordRecovery;
