import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { APP_ROUTES } from "../../utils";
import AuthContainer from "../Auth";
import Dashboard from "../Dashboard";

const allRoutes = [
  {
    path: APP_ROUTES.LOGIN,
    protected: false,
    properties: { ketan: 1 },
    component: AuthContainer,
  },
  {
    path: APP_ROUTES.REGISTER,
    protected: true,
    component: AuthContainer,
  },
  {
    path: APP_ROUTES.FORGOT_PASSWORD,
    protected: false,
    component: AuthContainer,
  },
  {
    path: APP_ROUTES.EDIT_PROFILE,
    protected: false,
    component: Dashboard,
  },
  {
    path: APP_ROUTES.DASHBOARD,
    protected: false,
    component: Dashboard,
  },
  {
    path: APP_ROUTES.PATIENTS,
    protected: false,
    component: Dashboard,
  },
  {
    path: APP_ROUTES.PATIENT_DETAILS,
    protected: false,
    component: Dashboard,
  },
  {
    path: APP_ROUTES.ADD_NEW_PATIENT,
    protected: false,
    component: Dashboard,
  },
];
const PrivateRoute = ({ component: RouteComponent, ...rest }: any) => {
  //   const { userData } = rest;
  //   const currentRoute = allRoutes.filter((items) => items.path === rest.path);
  return (
    <Route
      {...rest}
      render={(routeProps) => <RouteComponent {...routeProps} {...rest} />}
    />
  );
};

const PublicRoute = ({
  component: Component,
  properties,
  restricted,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={(props) => <Component properties={properties} {...props} />}
    />
  );
};

const Routes = (props: any) => {
  return (
    <>
      <Router>
        <Switch>
          {
            // props.userData.data ?
            allRoutes.map((items, i) =>
              items.protected ? (
                <PrivateRoute
                  path={items.path}
                  component={items.component}
                  exact
                  properties={items.properties}
                  {...props}
                />
              ) : (
                <PublicRoute
                  path={items.path}
                  component={items.component}
                  properties={items.properties}
                  exact
                  {...props}
                />
              )
            )
          }
          <>
            <Redirect to={"/login"} exact {...props} />
            {/* <Route path="" component={<></>} /> */}
          </>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
