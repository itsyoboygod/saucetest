import React, { Component } from "react";
import { Link } from "react-router-dom";
import All from "../../All";
import "./style.css";
import Product from "../../../pages/product";
import Loadbox from "../../../components/Loading/loadbox";
import Maindrop from "../../Dropdowns/maindrop";
import Carrousel from "../../Carrousel";

export default class Mainsection extends Component {
  render() {
    return (
      <div className="section-main">
        <Link to={`/All/pages/main`}>
          <div className="header-section">
            <h1> THIS IS THE MAIN SECTION </h1> <Maindrop />
          </div>
        </Link>
        <hr id="line"></hr>

        <div className="section-main-content">
          {/* <h1>NO CONTENT YET :(</h1> */}
          <span className="arrow-span">&#10092;</span>
          <ul>
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
