import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Inforeportbtn from "../Inforeportbtn";

Modal.setAppElement("#root");

function Inforeport() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   eventTitle(title);
  // };

  return (
    <div className="info-class">
      <button id="id-btn-report" onClick={() => setmodalIsOpen(true)}>
        <Inforeportbtn />
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
            <h1>INFO REPORT</h1>
            <h4>This is the info report text</h4>

            <form>
              <h1>Set report subject</h1>
              <div className="input-div-modal-clock">
                <input
                  id="id-event-title"
                  className="clock-input-modal"
                  placeholder=" report letter.."
                  type="text"
                  // value={title}
                  // onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </form>

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
                <h3>Report</h3>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Inforeport;
