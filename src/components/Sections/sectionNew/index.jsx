import React, { Component } from "react";
import { Link } from "react-router-dom";
import All from "../../All";
import "./style.css";
import Loadbox from "../../../components/Loading/loadbox";
import Maindrop from "../../Dropdowns/maindrop";

export default class Newsection extends Component {
  render() {
    return (
      <div className="section-new">
        <Link to={`/All/pages/new`}>
          <div className="header-section">
            <h1> THIS IS THE NEW SECTION </h1> <Maindrop />
          </div>
        </Link>
        <hr></hr>

        <div className="section-new-content">
          {/* <h1>NO CONTENT YET :(</h1> */}
          <span className="arrow-span">&#10092;</span>
          <ul>
            <li>
              <Loadbox />
            </li>
            <li>
              <Loadbox />
            </li>
            <li>
              <Loadbox />
            </li>
            <li>
              <Loadbox />
            </li>
          </ul>
          <span className="arrow-span">&#10093;</span>
        </div>
      </div>
    );
  }
}
