import React from "react";
import { Redirect } from "react-router-dom";

class SpecialReleaseRoute extends React.Component {
  render() {
    const Component = this.props.render;
    const isAuthenticated = localStorage.getItem("token");
    return isAuthenticated ? (
      <Component />
    ) : (
      <Redirect
        to={{
          pathname: "/release-signup",
          state: { from: this.props.location },
        }}
      />
    );
  }
}

export default SpecialReleaseRoute;
