import React, { Component } from "react";
import Sidebar from "../components/Sidebar";
import Listusers from "../components/Userlist";

export default class Users extends Component {
  render() {
    return (
      <div className="home">
        <Sidebar />
        <Listusers />
      </div>
    );
  }
}
