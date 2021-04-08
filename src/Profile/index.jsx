import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Mainpage from "./main";
import Newpage from "./new";
import Toppage from "./top";
import Randompage from "./random";
import Eventpages from "./events";


const Profile = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/All-profile/Profile/events" component={Eventpages} />
    </Switch>
  </BrowserRouter>
);

export default Profile;
