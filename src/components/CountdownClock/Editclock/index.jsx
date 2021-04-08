import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./style.css";

Modal.setAppElement("#root");

function Editclock({
  eventTitle,
  eventMonth,
  eventDay,
  eventHour,
  eventMinute,
  eventSecond,
}) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [y, setYear] = useState(new Date().getFullYear());
  const [mh, setMonth] = useState("");
  const [d, setDay] = useState("");
  const [h, setHour] = useState("");
  const [m, setMinute] = useState("");
  const [s, setSecond] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    eventTitle(title);
    eventMonth(mh);
    eventDay(d);
    eventHour(h);
    eventMinute(m);
    eventSecond(s);
  };

  return (
    <div className="newmodal">
      <button onClick={() => setmodalIsOpen(true)} id="myBtn-pencil-clock">
        <span class="fa fa-pencil"></span>
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={{
          overlay: {
            zIndex: 99,
            top: "50px",
            backgroundColor: "rgba(52, 52, 52, 0.8)",
            border: "0px !important",
            border: "none !important",
          },
        }}
      >
        <div className="modal-clock-content">
          <button id="btn-close-modal" onClick={() => setmodalIsOpen(false)}>
            &times;
          </button>
          <div id="modal-clock">
            <form onSubmit={handleSubmit}>
              <div className="input-div-modal-clock">
                <input
                  id="id-event-title"
                  className="clock-input-modal"
                  placeholder=" event title.."
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="set-time-event">
                <ul>
                  <li>
                    <input
                      className="clock-input-modal"
                      placeholder=" year"
                      type="number"
                      value={y}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </li>
                  <span>:</span>
                  <li>
                    <input
                      className="clock-input-modal"
                      placeholder=" month"
                      type="number"
                      value={mh}
                      onChange={(e) => setMonth(e.target.value)}
                    />
                  </li>
                  <span>:</span>
                  <li>
                    <input
                      className="clock-input-modal"
                      placeholder=" day"
                      type="number"
                      value={d}
                      onChange={(e) => setDay(e.target.value)}
                    />
                  </li>
                  <span>:</span>
                  <li>
                    <input
                      className="clock-input-modal"
                      placeholder=" hour"
                      type="number"
                      value={h}
                      onChange={(e) => setHour(e.target.value)}
                    />
                  </li>
                  <span>:</span>
                  <li>
                    <input
                      className="clock-input-modal"
                      placeholder=" minute"
                      type="number"
                      value={m}
                      onChange={(e) => setMinute(e.target.value)}
                    />
                  </li>
                  <span>:</span>
                  <li>
                    <input
                      className="clock-input-modal"
                      placeholder=" second"
                      type="number"
                      value={s}
                      onChange={(e) => setSecond(e.target.value)}
                    />
                  </li>
                </ul>
              </div>
        <div className="btn-cancel-save-clock">

              <button
                  type="submit"
                  id="btn-cancel-clock-modal"
                  // onClick={() => setmodalIsOpen(false)}
                >
                  <h3>Cancel</h3>
                </button>

                <button
                  type="submit"
                  id="btn-save-clock-modal"
                  // onClick={() => setmodalIsOpen(false)}
                >
                  <h3>Save</h3>
                </button>

        </div>

            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Editclock;
