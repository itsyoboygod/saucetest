import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Infodeletebtn from "../Infodeletebtn";

Modal.setAppElement("#root");

function Infodelete() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="info-class">
      <button id="id-btn-report" onClick={() => setmodalIsOpen(true)}>
        <Infodeletebtn />
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
            <h1>INFO DELETE</h1>
            <h4>This is the info delete text</h4>
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
                <h3>Delete</h3>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Infodelete;
