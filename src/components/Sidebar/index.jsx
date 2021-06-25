import React, { Component } from "react";
import Config from "../Config/index.";
import Infobtn from "../Infos/Infobtn";
import Inforeport from "../Infos/Inforeport/index.";
import Navtab from "../Navtabs/index.";
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
            <Config />
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
          <li style={{ padding: "0" }}>
            <Navtab />
          </li>
          <li style={{ padding: "0" }}>
            <Inforeport />
          </li>
        </ul>
        <div className="side-arrows">
          <span className="">&#10092;</span>
          <span className="">&#10093;</span>
        </div>
      </div>
    );
  }
}
