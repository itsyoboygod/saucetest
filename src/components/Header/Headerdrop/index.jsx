import react, { Component } from "react";
import Loginmodal from "../../../Login";
import "./style.css";

export default class Headerdrop extends Component {
  render() {
    return (
      <div className="dropdown">
        <span id="option-id" className="option">
          &#8942;
        </span>
        <div className="dropdown-header-content-option">
          <a href="#">
            <button>
              Option 1{" "}
              <a href="#">
                <span>&#x3F;</span>
              </a>
            </button>
          </a>
          <a href="#">
            <button>
              Option 2{" "}
              <a href="#">
                <span>&#x3F;</span>
              </a>
            </button>
          </a>
          <a href="#">
            <Loginmodal />
          </a>
        </div>
      </div>
    );
  }
}
