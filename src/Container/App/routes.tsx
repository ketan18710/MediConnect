import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import ForotPassword from "../Auth/ForgotPassword";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
const routes = [
  {
    name: "Login",
    path: "/login",
    component: Login,
    isProtected: false,
  },
  {
    name: "Forgot Password",
    path: "/forgotpassword",
    component: ForotPassword,
    isProtected: true,
  },
  {
    name: "Register",
    path: "/register",
    component: Register,
    isProtected: false,
  },
];
const PrivateRoutes = (props: any) => {
  const { component: Component, ...rest } = props;
  const { path } = rest;
  console.log(path, "path");
  return (
    <Route
      {...rest}
      render={(routeProps) => <Component {...rest} {...routeProps} />}
      path={path}
    />
  );
};
const PublicRoutes = (props: any) => {
  const { component: Component, ...rest } = props;
  const { path } = rest;
  return (
    <Route
      {...rest}
      render={(routeProps) => <Component {...rest} {...routeProps} />}
      path={path}
    />
  );
};
const Routes = (props: any) => {
  return (
    <Router>
      <Switch>
        {routes.map((route, index) => {
          console.log(route.path, "route.path");
          return (
            <>
              {route.isProtected ? (
                <PrivateRoutes key={index} {...route} {...props} />
              ) : (
                <PublicRoutes key={index} {...route} {...props} />
              )}
            </>
          );
        })}
      </Switch>
    </Router>
  );
};

export default Routes;
