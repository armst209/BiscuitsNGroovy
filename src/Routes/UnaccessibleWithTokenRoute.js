import React from "react";
import { Redirect } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";

class UnaccessibleWithTokenRoute extends React.Component {
  render() {
    const Component = this.props.render;
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? (
      // <Redirect to={{ pathname: "/", state: { from: this.props.location } }} />
      <Homepage />
    ) : (
      <Component />
    );
  }
}

export default UnaccessibleWithTokenRoute;
