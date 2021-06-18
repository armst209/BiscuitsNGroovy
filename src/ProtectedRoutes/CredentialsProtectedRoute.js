import React from "react";
import { Redirect } from "react-router-dom";

class CredentialsProtectedRoute extends React.Component {
  render() {
    const Component = this.props.component;
    const isAuthenticated = localStorage.getItem("token");

    return isAuthenticated ? (
      <Redirect
        to={{ pathname: "/fanportal", state: { from: this.props.location } }}
      />
    ) : (
      <Component />
    );
  }
}

export default CredentialsProtectedRoute;
