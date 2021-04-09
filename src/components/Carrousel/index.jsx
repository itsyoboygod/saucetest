import React, { Component } from "react";
import { Link } from "react-router-dom";
import Loadbox from "../Loading/loadbox";
import Postdrop from "./griddrop";
import "./style.css";

export default class Carrousel extends Component {
  render() {
    const li = document.getElementsByTagName("li");
    const box = document.querySelectorAll(".class_li loadbox_div");
    const carouselButtons = document.querySelectorAll(".carousel__button");
    const numberOfboxes = box.length;
    let boxIndex = 1;
    let translateX = 0;

    carouselButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        if (event.target.id === "btn-span-arrow-left") {
          if (boxIndex !== 1) {
            boxIndex--;
            translateX += 250;
          }
        } else {
          if (boxIndex !== numberOfboxes) {
            boxIndex++;
            translateX -= 250;
          }
        }

        li.style.transform = `translateX(${translateX}px)`;
        box.forEach((box, index) => {
          if (index === boxIndex - 1) {
            box.classList.add("active");
          } else {
            box.classList.remove("active");
          }
        });
      });
    });

    console.log(li.length);

    //<>
    //===================================================================
    // const carouselImages = document.querySelector('.carousel__images');
    // const images = document.querySelectorAll('.carousel__images img');
    // const carouselButtons = document.querySelectorAll('.carousel__button');
    // const numberOfImages = document.querySelectorAll('.carousel__images img').length;
    // let imageIndex = 1;
    // let translateX = 0;

    // carouselButtons.forEach(button => {
    //   button.addEventListener('click', (event) => {
    //     if (event.target.id === 'previous') {
    //       if (imageIndex !== 1) {
    //         imageIndex--;
    //         translateX += 250;
    //       }
    //     } else {
    //       if (imageIndex !== numberOfImages) {
    //         imageIndex++;
    //         translateX -= 250;
    //       }
    //     }

    //     carouselImages.style.transform = `translateX(${translateX}px)`;
    //     images.forEach((image, index) => {
    //       if (index === imageIndex - 1) {
    //         image.classList.add('active');
    //       } else {
    //         image.classList.remove('active');
    //       }
    //     });
    //   });
    // });

    //===================================================================
    // const moveLeft = () => {
    //   const moveLeft = document.getElementById("carrousel-static");
    //   const box = document.getElementById("id-loadbox");
    //   const box_width = box.offsetWidth;
    //   moveLeft.style.marginRight = -box_width * 2.5 + "px";
    //   moveLeft.style.transition = "1s";
    // };

    // const moveRight = () => {
    //   const moveRight = document.getElementById("carrousel-static");
    //   const box = document.getElementById("id-loadbox");
    //   const box_width = box.offsetWidth;
    //   moveRight.style.marginLeft = -box_width * 2.5 + "px";
    //   moveRight.style.transition = "1s";
    // };
    //</>

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
          {/* onClick={moveLeft} */}
          <button className="carousel__button" id="btn-span-arrow-left">
            <span className="arrow-span-carrousel-left">&#10092;</span>
          </button>
          <ul className="carousel__ul" id="carrousel-static">
            <li className="class_li" id="id-li-wrap">
              <Loadbox />
            </li>
          </ul>
          <button className="carousel__button" id="btn-span-arrow-right">
            {/* onClick={moveRight} */}
            <span className="arrow-span-carrousel-right">&#10093;</span>
          </button>
        </div>
      </div>
    );
  }
}
