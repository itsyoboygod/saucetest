import { React, Component } from "react";
import "./style.css";

export default class Registerpanel extends Component {
  render() {
    return (
      <div className="loginpanel-div">
        <div className="loginpanel-left">
          <h1>Começe pelo topo !!</h1>
        </div>
        <div className="loginpanel-right">
          <h1>Login</h1>
          <div className="panel-column-top">
            <input type="text" placeholder="Username"></input>
          </div>
          <div className="panel-column-bottom">
            <input type="password" placeholder="Password"></input>
          </div>
          <button>Log in</button>
          <p>
            Forgot your <a href="#">username</a> or <a href="#">password</a> ?
          </p>
        </div>
      </div>
    );
  }
}
