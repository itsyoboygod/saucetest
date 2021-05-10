import React, { Component, useState, useEffect, useRef } from "react";
import Infocarrousel from "../../Infos/Infocarrousel/index.";
import "./style.css";

export default function Carrouseldrop() {
  function hoverhandle() {
    const btn_grid = document.getElementById("id-btn-span-grid");
    btn_grid.style.transform = "rotate(90deg)";
    btn_grid.style.transition = "0.8s";

    const block_top_left = document.getElementById("top-left-block");
    block_top_left.style.width = "15px";
    block_top_left.style.height = "12px";
    block_top_left.style.transform = "translate(-2px, -2px)";
    block_top_left.style.transition = "0.8s";

    const block_top_right = document.getElementById("top-right-block");
    block_top_right.style.width = "15px";
    block_top_right.style.height = "12px";
    block_top_right.style.transform = "translate(2px, -2px)";
    block_top_right.style.transition = "0.8s";

    const block_bottom_left = document.getElementById("bottom-left-block");
    block_bottom_left.style.width = "15px";
    block_bottom_left.style.height = "12px";
    block_bottom_left.style.transform = "translate(-2px, 2px)";
    block_bottom_left.style.transition = "0.8s";

    const block_bottom_right = document.getElementById("bottom-right-block");
    block_bottom_right.style.width = "15px";
    block_bottom_right.style.height = "12px";
    block_bottom_right.style.transform = "translate(2px, 2px)";
    block_bottom_right.style.transition = "0.8s";
  }

  function outhandle() {
    const btn_grid = document.getElementById("id-btn-span-grid");
    btn_grid.style.transform = "rotate(0deg)";
    btn_grid.style.transition = "0.8s";

    const block_top_left = document.getElementById("top-left-block");
    block_top_left.style.width = "8px";
    block_top_left.style.height = "8px";
    block_top_left.style.transform = "translate(0px, 0px)";
    block_top_left.style.transition = "0.8s";

    const block_top_right = document.getElementById("top-right-block");
    block_top_right.style.width = "8px";
    block_top_right.style.height = "8px";
    block_top_right.style.transform = "translate(0px, 0px)";
    block_top_right.style.transition = "0.8s";

    const block_bottom_left = document.getElementById("bottom-left-block");
    block_bottom_left.style.width = "8px";
    block_bottom_left.style.height = "8px";
    block_bottom_left.style.transform = "translate(0px, 0px)";
    block_bottom_left.style.transition = "0.8s";

    const block_bottom_right = document.getElementById("bottom-right-block");
    block_bottom_right.style.width = "8px";
    block_bottom_right.style.height = "8px";
    block_bottom_right.style.transform = "translate(0px, 0px)";
    block_bottom_right.style.transition = "0.8s";
  }

  function wrapStyle() {
    const wrapLi = document.getElementById("carrousel-static");
    const scrollbar = document.getElementById("id-div-carrousel");
    wrapLi.style.display = "flex";
    wrapLi.style.width = "1000px";
    wrapLi.style.transition = " wrap 9s";
    scrollbar.style.overflowX = "hidden";

    const arrowLeft = document.getElementById("btn-span-arrow-left");
    arrowLeft.remove();

    const arrowRight = document.getElementById("btn-span-arrow-right");
    arrowRight.remove();

    const moveCarrousel = document.getElementById("carrousel-static");
    moveCarrousel.style.marginLeft = "0px";
    moveCarrousel.style.marginRight = "0px";
    moveCarrousel.style.marginRight = "0px";

    const wrap_size = document.getElementById("id-loadbox-div");

    if ((wrapLi.style.flexWrap = "wrap")) {
      wrap_size.style.width = "350px !important";
      wrap_size.style.height = "150px !important";
      const p_open_grid = document.getElementById("id-p-open-grid");
      const open_close_grid_btn = document.getElementById(
        "open-close-grid-btn"
      );
      p_open_grid.innerHTML = "Close grid";
      if (p_open_grid.clicked == true) {
        alert("clicked");
      }
    }
    // const loadboxDiv = document.getElementsByClassName("loadbox-div");
    // loadboxDiv.style.margin = "25px";
  }
  // function unwrapStyle() {
  //   const wrapLi = document.getElementById("id-loadbox-div");
  //   wrapLi.style.flexWrap = "nowrap";
  // }

  return (
    <div className="dropdown" id="id-dropdown-wrap">
      <span id="option-id" className="option">
        &#8942;
      </span>
      <div className="dropdown-content-option">
        <a href="#">
          <button>
            {/* {1 + 1 == 1 ? "😁" : "☹️"} */}
            Option 1
            <a href="#">
              <Infocarrousel />
            </a>
          </button>
        </a>
        <a href="#">
          <button>
            Option 2{" "}
            <a href="#">
              <Infocarrousel />
            </a>
          </button>
        </a>
        <button
          onMouseOver={hoverhandle}
          onMouseOut={outhandle}
          onClick={wrapStyle}
          id="open-close-grid-btn"
        >
          {/* {wrapStyle ? wrapStyle : !wrapStyle} */}
          <p id="id-p-open-grid">Open grid</p>
          <div className="btn-span-grid" id="id-btn-span-grid">
            <div className="row-blocks-top">
              <div id="top-left-block"></div>
              <div id="top-right-block"></div>
            </div>
            <div className="row-blocks-bottom">
              <div id="bottom-left-block"></div>
              <div id="bottom-right-block"></div>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
