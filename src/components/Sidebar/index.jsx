import React, { Component } from "react";
import Pencilicon from "../Pencilicon";
import "./style.css";
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
></link>;
export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <span class="fa fa-globe"></span>
          </li>
          <li>
            <span class="fa fa-gear"></span>
          </li>
          <li>
            <span class="fa fa-fire"></span>
          </li>
          <li style={{ padding: "0" }}>
            <Pencilicon />
          </li>
        </ul>
      </div>
    );
  }
}
