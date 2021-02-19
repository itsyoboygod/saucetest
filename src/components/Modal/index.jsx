import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

Modal.setAppElement("#root");

function Newmodal() {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="newmodal">
      <button onClick={() => setmodalIsOpen(true)} id="myBtn">
        New Post
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
        <div className="modal-content">
          <button id="btn-close-modal" onClick={() => setmodalIsOpen(false)}>
            &times;
          </button>
          <div id="modal-posts">
            <div className="input-div-modal">
              <input
                id="id-navtop-input-modal"
                className="navtop-input-modal"
                placeholder=" insert title here.."
                type="text"
              />
              <div className="navtop-file-input-modal-border-doted">
                <input
                  id="prvw-img"
                  className="navtop-file-input-modal"
                  name="file"
                  type="file"
                  accept="image/*"
                />
                <img id="preview" />
                <button className="clear-prvw" onclick="clearPreview();">
                  Clear input field
                </button>
              </div>
            </div>
            <div className="add-btn-modal">
              <button type="submit" id="btn-add-post-modal">
                <h3>Done</h3>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Newmodal;
