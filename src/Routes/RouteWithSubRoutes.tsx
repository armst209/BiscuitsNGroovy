
//react imports
import { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";

//Google Analytics imports
import PageViewsTracking from "../utils/GoogleAnalytics/PageViewsTracking";

//utility imports
import { token, PR_Auth_Token } from "../utils/UtilityVariables";

//route imports
import { IRoute } from "./config";


const RouteWithSubRoutes = (route: IRoute) => {
  return (
    <Suspense fallback={route.fallback}>
      <PageViewsTracking>
        <Route
          path={route.path}
          render={(props: any) =>
            //REDIRECT
            route.redirect ? (
              <Redirect to={route.redirect} />
            ) : //PRIVATE
              route.private ? (
                token ? (
                  route.component && (
                    <route.component {...props} routes={route.routes} />
                  )
                ) : (
                  <Redirect to="/" />
                )
              ) : //CREDENTIALS
                route.credentials ? (
                  token ? (
                    <Redirect to="/" />
                  ) : (
                    route.component && (
                      <route.component {...props} routes={route.routes} />
                    )
                  )
                ) : //RESETCREDENTIALS
                  route.resetCredentials ? (
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
      </PageViewsTracking>
    </Suspense>
  );
};

export default RouteWithSubRoutes;
