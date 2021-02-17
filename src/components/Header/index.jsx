import React from "react";
import "./style.css";
import Headerdrop from "./Headerdrop";

const Header = () => (
  <header id="main-header">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div className="navbar-top">
      <div className="btn-sidebar">
        <span className="fa fa-bars"></span>
      </div>

      <div className="logo-div">
        <h1>
          <a href="/">Home</a>
        </h1>
      </div>
      <div className="input-div">
        <form>
          <input
            className="navtop-input"
            id="navtop-input-id"
            placeholder=" search"
            type="search"
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="notifi-div">
        <a href="#">
          <i className="fa fa-comments"></i>
        </a>
        <div className="dropdown">
          <i id="post-noifi-bell" className="fa fa-bell"></i>
          <div id="dropdown-content-notifi" className="dropdown-content"></div>
        </div>
        <a href="#">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="#">
          <i className="fas fa-globe"></i>
        </a>
        <Headerdrop />
      </div>
    </div>
  </header>
);

export default Header;
