
//react imports
import { Suspense } from "react";
import { Switch } from "react-router-dom";
// import { IRoute } from "./routeConfig";

//component imports
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import Loading from "../components/Loading/Loading";

//Google Analytics import
import PageViewsTracking from "../utils/GoogleAnalytics/PageViewsTracking";

const Router = ({ routes }) => {

  return (
    <Suspense fallback={<Loading />}>
      <PageViewsTracking>
        <Switch>
          {routes.map((route) => (
            <RouteWithSubRoutes {...route} />
          ))}
        </Switch>
      </PageViewsTracking>
    </Suspense>
  );
};

export default Router;
