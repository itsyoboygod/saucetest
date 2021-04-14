import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Infobtn from "../Infobtn";

Modal.setAppElement("#root");

function Infoprofile() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="info-class">
      <button className="btn-gear" onClick={() => setmodalIsOpen(true)}>
        <i className="fas fa-gear"></i>
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
            <h1>INFO CONFIG PROFILE</h1>
            <h4>This is the info config profile text</h4>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Infoprofile;
