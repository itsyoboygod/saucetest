import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";
import "../Navtabs/navtab.js";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TabContainer from "react-bootstrap/TabContainer";
import TabContent from "react-bootstrap/TabContent";
// import "bootstrap/dist/css/bootstrap.min.css";

import Infobtn from "../Infos/Infobtn";

Modal.setAppElement("#root");

const Navtab = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  return (
    <div className="info-class">
      <button onClick={() => setmodalIsOpen(true)}>
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
            <div class="tab">
              <button class="tablinks">London</button>
              <button class="tablinks">Paris</button>
              <button class="tablinks">Tokyo</button>
            </div>

            <div id="London" class="tabcontent">
              <h3>London</h3>
              <p>London is the capital city of England.</p>
            </div>

            <div id="Paris" class="tabcontent">
              <h3>Paris</h3>
              <p>Paris is the capital of France.</p>
            </div>

            <div id="Tokyo" class="tabcontent">
              <h3>Tokyo</h3>
              <p>Tokyo is the capital of Japan.</p>
            </div>
          </div>
        </div>
        <script src="./navtab.js"></script>
      </Modal>
    </div>
  );
};

export default Navtab;
