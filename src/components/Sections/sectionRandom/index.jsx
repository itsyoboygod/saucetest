import React, { Component } from "react";
import { Link } from "react-router-dom";
import All from "../../All";
import "./style.css";
import Loadbox from "../../../components/Loading/loadbox";
import Maindrop from "../../Dropdowns/maindrop";

export default class Randomsection extends Component {
  render() {
    return (
      <div className="section-random">
        <Link to={`/All/pages/random`}>
          <div className="header-section">
            <h1> THIS IS THE RANDOM SECTION </h1> <Maindrop />
          </div>
        </Link>
        <hr></hr>

        <div className="section-random-content">
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
