import React, { Suspense } from "react";
import { IRoute } from "./routeConfig";
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "./RouteWithSubRoutes";
import Loading from "../common/components/Loading/Loading";
import PageViewsTracking from "../common/utils/GoogleAnalytics/PageViewsTracking";

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  return (
    <Suspense fallback={<Loading />}>
      <PageViewsTracking>
        <Switch>
          {routes.map((route: IRoute) => (
            <RouteWithSubRoutes {...route} />
          ))}
        </Switch>
      </PageViewsTracking>
    </Suspense>
  );
};

export default Router;
