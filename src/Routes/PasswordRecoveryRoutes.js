import React from "react";
import { useLocation, useRouteMatch, Switch, Route } from "react-router-dom";
import PassRecoveryForm from "../pages/PasswordRecovery/PassRecoveryForm";
import EmailInput from "../pages/PasswordRecovery/EmailInput";

function PasswordRecoveryRoutes() {
  let { path } = useRouteMatch();
  let query = new URLSearchParams(useLocation().search);
  return (
    <Switch>
      <Route exact path={path}>
        <EmailInput />
      </Route>
      <Route path={`${path}/:userTokenId`}>
        <PassRecoveryForm userTokenId={query.get("userTokenId")} />
      </Route>
    </Switch>
  );
}

export default PasswordRecoveryRoutes;
