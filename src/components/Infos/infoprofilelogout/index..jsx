import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Infoproflielogoutbtn from "../Infoproflogoutbtn";

Modal.setAppElement("#root");

function Infoprofilelogout() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="info-class">
      <button id="id-btn-profile-logout" onClick={() => setmodalIsOpen(true)}>
        <Infoproflielogoutbtn />
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
        <div className="info-content">
          <button id="btn-close-modal" onClick={() => setmodalIsOpen(false)}>
            &times;
          </button>
          <div id="info">
            <h1>INFO LOGOUT</h1>
            <h4>Are you sure you want to logout ?</h4>
            <div className="btn-cancel-save-clock">
              <button
                type="submit"
                id="btn-cancel-clock-modal"
                onClick={() => setmodalIsOpen(false)}
              >
                <h3>Cancel</h3>
              </button>

              <button
                type="submit"
                id="btn-save-clock-modal"
                // onClick={() => setmodalIsOpen(false)}
              >
                <h3>Logout</h3>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Infoprofilelogout;
