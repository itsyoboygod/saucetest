import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./style.css";

Modal.setAppElement("#root");

function Loginmodal() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);



  return (
    <div className="Login-panel">
      <button onClick={() => setmodalIsOpen(true)} id="myBtn-login">
        Login <span id="id-login">&#11176;</span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            zIndex: 99,
            top: "50px",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
          },
        }}
      >

        <div className="modal-login-content">
          <button id="btn-close-modal" onClick={() => setmodalIsOpen(false)}>
            &times;
          </button>
          <div id="modal-login">
            <h1>LOGIN</h1>
            <form>
              <div className="input-div-modal-login">
                <input
                  id="id-login-email"
                  className="login-input-modal"
                  placeholder=" email"
                  type="text"
                />
                <input
                  className="login-input-modal"
                  placeholder=" phone"
                  inputmode="number"
                  pattern="^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"
                />
                <input
                  id="id-login-password"
                  className="login-input-modal"
                  placeholder=" password"
                  type="password"
                />
              </div>
              <button type="submit" id="btn-add-post-modal-form">
                <h4>Done</h4>
              </button>
            </form>
            <h4>
              Forgot your password? <a href="/Register">New password</a>
            </h4>
            <h4>
              {/* <Link to={`/Register`}> */}
              Not a member? <a href="/Register">Register</a>
            </h4>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Loginmodal;
