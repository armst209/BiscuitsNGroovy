import React from 'react';
import {IRoute} from "./config"
import {Switch, Route} from "react-router-dom";
import RouteWithSubRoutes from "../Routes/RouteWithSubRoutes"
import NotFound from '../pages/NotFound/NotFound';
interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }) => {
  return <Switch>{routes.map((route: IRoute) => <RouteWithSubRoutes  {...route} />)}
 </Switch>;
};

export default Router;