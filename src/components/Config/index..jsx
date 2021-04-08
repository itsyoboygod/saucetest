import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";


Modal.setAppElement("#root");

function Config() {
    const [modalIsOpen, setmodalIsOpen] = useState(false);
    return (
      <div className="info-class">
        <div className="tooltip" onClick={() => setmodalIsOpen(true)}>
              <span class="fa fa-gear"></span>
              <span class="tooltiptext tooltip-right">config</span>
            </div>
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
              <h1>Configurations</h1>
              <h4>This is the configuration text</h4>
            </div>
          </div>
        </Modal>
      </div>
    );
}

export default Config;
