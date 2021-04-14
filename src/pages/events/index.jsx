import React, { Component } from "react";
import CountdownClock from "../../components/CountdownClock";
import "./style.css";

export default class Eventspage extends Component {
  render() {
    return (
      <div className="events">
        <h1> THIS IS THE EVENTS PAGE </h1>
        <CountdownClock />
      </div>
    );
  }
}
