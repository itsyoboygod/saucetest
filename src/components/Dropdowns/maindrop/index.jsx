import react, { Component } from "react";
import Info from "../../Infos/index.";
import "./style.css";

export default class Maindrop extends Component {
  render() {
    return (
      <div className="dropdown" id="id-dropdown">
        <span id="option-id" className="option">
          &#8942;
        </span>
        <div className="dropdown-content-option">
          <a href="##">
            <button>
              Option 1{" "}
              <Info/>
            </button>
          </a>
          <a href="#">
            <button>
              Option 2{" "}
               <Info/>
            </button>
            </a>
        </div>
      </div>
    );
  }
}
