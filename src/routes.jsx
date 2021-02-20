import React from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Home from "./Home";
import All from "./components/All";
import Login from "./Login";
import Registerpanel from "./Register";


const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />{" "}
      <Route path="/All" component={All} />{" "}
      {/* <Route exact path="/" component={() => <h1>Login</h1>} /> */}
      <Route path="/Register" component={Registerpanel} />
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
