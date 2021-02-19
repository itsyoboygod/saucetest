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

import api from "../../services/api";

import "./style.css";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const Left = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
