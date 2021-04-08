import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Mainpage from "./main";
import Newpage from "./new";
import Toppage from "./top";
import Randompage from "./random";

const Routespages = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/All/pages/main" component={Mainpage} />
      <Route path="/All/pages/top" component={Toppage} />
      <Route path="/All/pages/random" component={Randompage} />
      <Route path="/All/pages/new" component={Newpage} />
    </Switch>
  </BrowserRouter>
);

export default Routespages;
