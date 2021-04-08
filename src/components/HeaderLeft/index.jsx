import { React, Component } from "react";
import "./style.css";

export default class HeaderLeft extends Component {
  render() {
    return (
      <div className="header-left">
        <h3>
          <a href="../pages/main">Main</a>
        </h3>
        <h3>
          <a href="../pages/top">Top</a>
        </h3>
        <h3>
          <a href="../pages/new">New</a>
        </h3>
        <h3>
          <a href="../pages/random">Random</a>
        </h3>
      </div>
    );
  }
}
