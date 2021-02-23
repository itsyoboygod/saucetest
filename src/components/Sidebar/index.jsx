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
            <div className="tooltip">
              <span class="fa fa-globe"></span>
              <span class="tooltiptext tooltip-right">global</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
              <span class="fa fa-gear"></span>
              <span class="tooltiptext tooltip-right">config</span>
            </div>
          </li>
          <li>
            <div className="tooltip">
              <span class="fa fa-fire"></span>
              <span class="tooltiptext tooltip-right">trend</span>
            </div>
          </li>
          <li style={{ padding: "0" }}>
            <Pencilicon />
          </li>
        </ul>
      </div>
    );
  }
}
