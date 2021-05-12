import React from "react";
import Main from "../../pages/main";
import Top from "../../pages/top";
import Routespages from "../../pages/Routespages";
import { Link, BrowserRouter, Route } from "react-router-dom";

import HeaderLeftProfile from "../HeaderLeftProfile";
import Countdownclock from "../CountdownClock";

import "./style.css";
import Profile from "../../Profile";

const Left = () => {
  return (
    <div className="left">
      <Countdownclock />
      <HeaderLeftProfile />
      <div id="content">
        <div id="each-content">
          <Routespages />
        </div>
      </div>
    </div>
  );
};

export default Left;
