import React from "react";
import { Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  render() {
    const Component = this.props.render;
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect to={{ pathname: "/", state: { from: this.props.location } }} />
    );
  }
}

export default ProtectedRoute;