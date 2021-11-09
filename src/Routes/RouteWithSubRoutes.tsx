import { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";
import { IRoute } from "./config";
const RouteWithSubRoutes = (route: IRoute) => {
  /** Authenticated flags */
  let token = localStorage.getItem("token");
  let PR_Auth_Token = localStorage.getItem("PR_Auth_Token");

  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          //REDIRECT
          route.redirect ? (
            <Redirect to={route.redirect} />
          //PRIVATE
          ) : route.private ? (
            token ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to="/" />
            )
          //CREDENTIALS
          ) : route.credentials ? (
            token ? (
              <Redirect to="/" />
            ) : (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            )
          //RESETCREDENTIALS
          ) : route.resetCredentials ? (
            PR_Auth_Token ? (
              route.component && (
                <route.component {...props} routes={route.routes} />
              )
            ) : (
              <Redirect to="/" />
            )
          ) : (
            route.component && (
              <route.component {...props} routes={route.routes} />
            )
          )
        }
      />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
