
//react imports
import { Suspense } from "react";
import { Redirect, Route } from "react-router-dom";


//utility imports
// import { PR_Auth_Token } from "../utils/UtilityVariables";

//redux imports
import { useSelector, RootStateOrAny } from "react-redux";

//route imports
// import { IRoute } from "./config";


const RouteWithSubRoutes = (route) => {

  const isUserAuthenticated = useSelector((state) => state.authentication.isLoggedIn);

  const handleRouteRendering = (props) => {
    if (route.private) {
      if (isUserAuthenticated) {
        return <route.component {...props} routes={route.routes} />
      }
      return <Redirect to="/" />
    }
    return <route.component {...props} routes={route.routes} />
  };

  return (
    <Route path={route.path} exact={route.exact} render={(props) => handleRouteRendering(props)} />
  );
};

export default RouteWithSubRoutes;

