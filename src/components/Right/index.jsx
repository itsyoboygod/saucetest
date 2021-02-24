import React from "react";
import "./style.css";
import Newmodal from "../Modal";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
/>;

const Right = () => (
  <div className="right">
    <div className="prof-info-box">
      <div className="img-prof">
        <input
          id="profile-input"
          type="file"
          accept=".jpg, .jpeg, .png"
          name="teste"
        />
      </div>
      <div className="profile-conf">
        <div className="dropdown">
          <i className="fas fa-user-friends">
            <span id="follower-num-id" className="follower-num">
              {" "}
              0
            </span>
          </i>
          <div className="dropdown-content-user-follow">
            <button>Follow</button>
            <button>Unfollow</button>
          </div>
        </div>
        <div className="tooltip">
          <i className="fas fa-coins">
            <span> 1.9M</span>
          </i>
          <span className="tooltiptext">1.938.234 M</span>
        </div>
        <i className="fas fa-gear"></i>
        <i className="fa fa-sign-out"></i>
      </div>
      
          <Newmodal />
       
    </div>

    <div className="ad-box-right">
      <h1>#Ad</h1>
      <ul className="ads-links">
        <li>
          <a href="#">link 1</a>
        </li>
        <li>
          <a href="#">link 2</a>
        </li>
        <li>
          <a href="#">link 3</a>
        </li>
        <li>
          <a href="#">link 4</a>
        </li>
      </ul>
      <ul className="ads-links">
        <li>
          <a href="#">link 5</a>
        </li>
        <li>
          <a href="#">link 6</a>
        </li>
        <li>
          <a href="#">link 7</a>
        </li>
        <li>
          <a href="#">link 8</a>
        </li>
      </ul>
    </div>
  </div>
);

export default Right;
