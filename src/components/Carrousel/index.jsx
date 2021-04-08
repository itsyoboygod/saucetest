import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loadbox from "../Loading/loadbox";
import Postdrop from "./griddrop";
import "./style.css";

export default class Carrousel extends Component {
  render() {
    const moveLeft = () => {
      const moveLeft = document.getElementById("carrousel-static");
      const box = document.getElementById("id-loadbox");
      const box_width = box.offsetWidth;
      moveLeft.style.marginRight = -box_width * 2.5 + "px";
      moveLeft.style.transition = "1s";
    };

    const moveRight = () => {
      const moveRight = document.getElementById("carrousel-static");
      const box = document.getElementById("id-loadbox");
      const box_width = box.offsetWidth;
      moveRight.style.marginLeft = -box_width * 2.5 + "px";
      moveRight.style.transition = "1s";
    };

    return (
      <div className="section-main">
        <div className="header-section">
          <Link to={`/All/pages/main`}>
            <h1> THIS IS THE CARROUSEL TEST SECTION </h1>
          </Link>
          <Postdrop />
        </div>

        <div className="section-carrousel-content">
          {/* <h1>NO CONTENT YET :(</h1> */}
          <button id="btn-span-arrow-left" onClick={moveLeft}>
            <span className="arrow-span-carrousel-left">&#10092;</span>
          </button>
          <ul id="carrousel-static">
            <li id="id-li-wrap">
              <Loadbox />
            </li>
          </ul>
          <button id="btn-span-arrow-right" onClick={moveRight}>
            <span className="arrow-span-carrousel-right">&#10093;</span>
          </button>
        </div>
      </div>
    );
  }
}
