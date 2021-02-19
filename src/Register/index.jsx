import { React, Component } from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default class Registerpanel extends Component {
  render() {
    return (
      <div className="loginpanel-div">
        <div className="loginpanel-left">
          <h1>START FROM THE TOP !!!</h1>
        </div>
        <div className="loginpanel-right">
          <h1>Register</h1>
          <form>
            <input
              type="text"
              placeholder="Email"
              className="text-input"
            ></input>
            <input
              type="text"
              placeholder="Username"
              className="text-input"
            ></input>
            <div className="radio-input">
              <input type="radio" name="gender" id="radio-input-id" /> Male
              <input type="radio" name="gender" /> Female
              <input type="radio" name="gender" /> Other
            </div>
            <input
              type="password"
              placeholder="Password"
              className="text-input"
            ></input>
            <button>Register</button>
          </form>
          <p>
            Already a member? <Link to={`/Login`}>Login</Link>
          </p>
        </div>
      </div>
    );
  }
}
