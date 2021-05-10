import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import CountdownClock from "../components/CountdownClock";
import Hook from "../components/Hook";
// import Newmodal from "../components/Modal";
import Filter from "../components/Filter";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import "./style.css";
import FunctionTest from "../components/Testfunction";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Sidebar />
        <CountdownClock />
        <Carrousel />
        <Carrousel />
        <Carrousel />

        {/* <FunctionTest /> */}

        {/* <Carrousel /> */}
        {/* <Filter /> */}

        {/* <Mainsection /> */}
        {/* <Topsection /> */}
        {/* <Newsection /> */}
        {/* <Randomsection /> */}
        {/* <Hook /> */}
      </div>
    );
  }
}
