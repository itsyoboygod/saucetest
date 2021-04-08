import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import CountdownClock from "../components/CountdownClock";
import Hook from "../components/Hook";
import Newmodal from "../components/Modal";
import Filter from "../components/Filter";
import Carrousel from "../components/Carrousel";
import Header from "../components/Header";
import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <Sidebar />
        <CountdownClock />
        <Carrousel />
        <Carrousel />
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
