import React, { Component } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import All from "./components/All";
import Login from "./Login";
import Registerpanel from "./Register";
import Profile from "./Profile";

import { isAuthenticated } from "./auth";
import Users from "./Users";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <PrivateRoute path="/All" component={All} />
      <PrivateRoute path="/Profile" component={Profile} />
      <Route path="/Register" component={Registerpanel} />
      <Route path="/Users" component={Users} />
      {/* <Route exact path="/" component={() => <h1>Login</h1>} /> */}
      <Route
        path="*"
        component={() => (
          <h1 style={{ margin: "15%", color: "white" }}>Page not found :(</h1>
        )}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;
