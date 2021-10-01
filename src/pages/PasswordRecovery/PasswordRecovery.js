import React from "react";
import { useLocation } from "react-router-dom";
import "./PasswordRecoveryStyles.scss";
import { useRouteMatch, Switch, Route } from "react-router-dom";
import EmailInput from "./EmailInput";
import PassRecoveryForm from "./PassRecoveryForm";

function PasswordRecovery() {
  let { path } = useRouteMatch();
  let query = new URLSearchParams(useLocation().search);
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
