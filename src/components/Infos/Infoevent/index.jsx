import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Infobtn from "../Infobtn";
import Editclock from "../../CountdownClock/Editclock";

Modal.setAppElement("#root");

function Infoevent() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="info-class">
      <button id="id-btn-info-event" onClick={() => setmodalIsOpen(true)}>
        <Infobtn />
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
            <h1>INFO EVENT</h1>
            <h4>This is the info event text</h4>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Infoevent;
