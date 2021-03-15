import React from "react";
import Main from "../../pages/main";
import Top from "../../pages/top";
import Routespages from "../../pages/Routespages";
import { Link, BrowserRouter, Route } from "react-router-dom";

import HeaderLeft from "../HeaderLeft";

import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Countdownclock from '../CountdownClock'


import "./style.css";
import Profile from "../../Profile";

const Left = () => {

  return (
    <div className="left">
      <Countdownclock/>
      <HeaderLeft />
      <div id="content">
        <div id="each-content">
          <Routespages />
        </div>
      </div>
    </div>
  );
};

export default Left;
