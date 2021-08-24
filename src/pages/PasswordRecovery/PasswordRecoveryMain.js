import React from "react";
import { Switch, Route } from "react-router-dom";
import EmailInput from "./EmailInput";
import PassRecoveryForm from "./PassRecoveryForm";

function PasswordRecoveryMain() {
  return (
    <div>
      <h1>PasswordRecovery</h1>
      <Switch>
        <Route path="/" component={EmailInput} />
        <Route path="/create-new-password" component={PassRecoveryForm} />
      </Switch>
    </div>
  );
}

export default PasswordRecoveryMain;
