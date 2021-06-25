import { React, Component, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

import "./style.css";
import { response } from "express";

const Registerpanel = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(false);
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");

  const register = () => {
    Axios.post("http://localhost:3000/Register", {
      email: setEmail,
      username: setUsername,
      password: setPassword,
    }).then((response) => {
      if (response.data.message) {
        setloginStatus(response.message);
      } else {
        setloginStatus(response);
      }
    });
  };
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
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
          <input
            type="text"
            placeholder="Username"
            className="text-input"
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
          <div className="radio-input">
            <input type="radio" name="gender" id="id-radio-input-male" /> Male
            <input type="radio" name="gender" id="id-radio-input-female" />{" "}
            Female
            <input type="radio" name="gender" id="id-radio-input-other" /> Other
          </div>
          <input
            type="password"
            placeholder="Password"
            className="text-input"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <button type="submit" onClick={register}>
            Register
          </button>
        </form>
        <p>
          Already a member? <Link to={`/Login`}>Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registerpanel;
