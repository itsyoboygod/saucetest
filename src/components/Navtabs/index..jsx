import React, { useState } from "react";
import Modal from "react-modal";
import "./style.css";

import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
// import 'bootstrap/dist/css/bootstrap.min.css';

import Infobtn from "../Infos/Infobtn"


Modal.setAppElement("#root");

function Navtab() {
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


            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
              <Tab eventKey="home" title="Home">
                <h1>bruh1</h1>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <h1>bruh2</h1>
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                <h1>bruh3</h1>
              </Tab>
            </Tabs>

          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Navtab;
