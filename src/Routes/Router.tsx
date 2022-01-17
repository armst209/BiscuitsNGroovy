import React from "react";
import { IRoute } from "./config";
import { Switch } from "react-router-dom";
import RouteWithSubRoutes from "../Routes/RouteWithSubRoutes";

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  return (
    <Switch>
      {routes.map((route: IRoute) => (
        <RouteWithSubRoutes {...route} />
      ))}
    </Switch>
  );
};

export default Router;
