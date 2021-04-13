import { React, Component, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

const Registerpanel = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState(false);
  const [password, setPassword] = useState("");

  const registerForm = (e) => {
    console.log(e.target.value);
    e.preventDefault();
  };

  const registerUser = (e) => {
    alert("User registred " + setUsername + { email } + gender);
    registerForm.e.target = "";
  };

  return (
    <div className="loginpanel-div">
      <div className="loginpanel-left">
        <h1>START FROM THE TOP !!!</h1>
      </div>
      <div className="loginpanel-right">
        <h1>Register</h1>
        <form onChange={registerForm}>
          <input type="text" placeholder="Email" className="text-input"></input>
          <input
            type="text"
            placeholder="Username"
            className="text-input"
            name="email"
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
          ></input>
          {/* <select>
            <option>test 1</option>
            <option>test 2</option>
            <option>test 3</option>
            <option>test 4</option>
          </select> */}
          <button type="submit" onClick={registerUser}>
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
