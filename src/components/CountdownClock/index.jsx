import React, { Components, useState, useEffect } from "react";

import { Component } from "react";
import Infoevent from "../Infos/Infoevent/index.jsx";
import Editclock from "./Editclock";
import Tootlip from "../Tootlip";

import "./style.css";

const CountdownClock = () => {
  const [YY, setYear] = useState(new Date().getFullYear());
  const [MM, setMonth] = useState(12);
  const [DD, setDays] = useState(31);
  const [HH, setHours] = useState(23);
  const [MI, setMinutes] = useState(59);
  const [SS, setSeconds] = useState(59);

  // useEffect(() => {
  const [title, setTitle] = useState("EVENT TITLE");

  const [now, setNow] = useState(new Date());

  const [eventDate, seteventDate] = useState(
    new Date(YY, MM - 1, DD, HH, MI, SS)
  );

  const [currentTime, setcurrentTime] = useState(now.getTime());
  const [eventTime, seteventTime] = useState(eventDate.getTime());

  const [remTime, setremTime] = useState(eventTime - currentTime);

  var [s, setS] = useState(Math.floor(remTime / 1000));
  var [m, setM] = useState(Math.floor(s / 60));
  var [h, setH] = useState(Math.floor(m / 60));
  var [d, setD] = useState(Math.floor(h / 24));

  h %= 24;
  m %= 60;
  s %= 60;

  d = d + "";
  h = h < 10 ? "0" + h + "" : h;
  m = m < 10 ? "0" + m : m + "";
  s = s < 10 ? "0" + s : s;

  // var faltam = "";
  // faltam += d && d > 1 ? d + " dias, " : d == 1 ? "1 dia, " : "";
  // faltam += toString(h).length ? h + " hr, " : "";
  // faltam += toString(m).length ? m + " min e " : "";
  // faltam += s + " seg";

  // if (d + h + m + s > 0) {
  //     faltam = document.getElementById("contador");
  //     setTimeout(CountdownClock, 1000);
  //   }

  const eventTitle = (title) => {
    setTitle(title);
  };

  const eventMonth = (MM) => {
    setMonth(MM);
  };

  const eventDay = (DD) => {
    setDays(DD);
  };

  const eventHour = (HH) => {
    setHours(HH);
  };

  const eventMinute = (MI) => {
    setMinutes(MI);
  };

  const eventSecond = (SS) => {
    setSeconds(SS);
  };

  return (
    <div>
      <div className="content-clock">
        <table className="countdowncontainer">
          <tr class="info-title">
            <td colspan="4" id="neweventtitle">
              <div class="mytooltip">
                <a href="All/pages/events">
                  <p>{title}</p>
                </a>
                <span id="id-mytooltip">
                  <tr>
                    <td>
                      <Infoevent />
                    </td>
                    <td>
                      <button id="myBtn-pencil-clock">
                        <Editclock
                          eventTitle={eventTitle}
                          eventMonth={eventMonth}
                          eventDay={eventDay}
                          eventHour={eventHour}
                          eventMinute={eventMinute}
                          eventSecond={eventSecond}
                        />
                      </button>
                    </td>
                    <td>
                      <button id="id-plus-sign">+</button>
                    </td>
                  </tr>
                </span>
              </div>
            </td>
          </tr>
          <tr className="info-time">
            <td id="days">
              {d}
              <span>Days</span>
            </td>
            <td className="dots-time">:</td>
            <td id="hours">
              {h}
              <span>hours</span>
            </td>
            <td className="dots-time">:</td>
            <td id="minutes">
              {m}
              <span>minutes</span>
            </td>
            <td className="dots-time">:</td>
            <td id="seconds">
              {s}
              <span>seconds</span>
            </td>
          </tr>
        </table>
        <span id="contador"></span>
      </div>
    </div>
  );
};

export default CountdownClock;
