import React from "react";
import "./PasswordRecoveryStyles.scss";
import { useLocation, useRouteMatch, Switch, Route } from "react-router-dom";
import PassRecoveryForm from "../PasswordRecovery/PassRecoveryForm";
import EmailInput from "../PasswordRecovery/EmailInput";

function PasswordRecovery() {
  let { path } = useRouteMatch();
  let query = new URLSearchParams(useLocation().search);
  console.log(path);
  return (
    <section id="password-recovery">
      <div className="password-recovery-title">
        <h1>PASSWORD RECOVERY</h1>
      </div>

      <Switch>
        <Route exact path={path}>
          <EmailInput />
        </Route>
        <Route path={`${path}/:userTokenId`}>
          <PassRecoveryForm userTokenId={query.get("userTokenId")} />
        </Route>
      </Switch>
    </section>
  );
}

export default PasswordRecovery;
