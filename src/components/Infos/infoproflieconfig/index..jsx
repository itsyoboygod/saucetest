import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import Infoprofliebtn from "../Infoprofbtn";

Modal.setAppElement("#root");

function Infoprofileconfig() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    return (
      <div className="info-class">
        <button id="id-btn-Infoprofliebtn" onClick={() => setmodalIsOpen(true)}>
          <Infoprofliebtn/>
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
              <h1>INFO PROFILE CONFIG</h1>
              <h4>This is the info profile configurations text</h4>
            </div>
          </div>
        </Modal>
      </div>
    );
}

export default Infoprofileconfig;
