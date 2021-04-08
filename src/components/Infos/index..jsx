import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Infobtn from "./Infobtn"

Modal.setAppElement("#root");

function Info() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    return (
      <div className="info-class">
        <button onClick={() => setmodalIsOpen(true)}>
          <Infobtn/>
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
              <h1>INFO</h1>
              <h4>This is the info text</h4>
            </div>
          </div>
        </Modal>
      </div>
    );
}

export default Info;
