import React, { Component, useState } from "react";
import Filter from "../Filter";
import Infodelete from "../Infos/Infodelete/index.";
import Inforeport from "../Infos/Inforeport/index.";
import "./style.css";
import JASONDATA from "../../mydata.json";

const Listusers = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <div className="input-div" id="id-input-div-users-search">
        <form>
          <input
            className="navtop-input"
            id="navtop-input-id"
            placeholder=" search user ..."
            type="search"
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button type="submit">Go</button>
        </form>
      </div>
      <div className="users-list">
        <div className="title-list">
          <h1>Users list:</h1>
        </div>

        <ul>
          <li>
            <a href="/Profile">
              <h1>xXUserXx</h1>
            </a>

            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser2Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser3Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser4Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser5Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser6Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser7Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser8Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser9Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
          <li>
            <h1>xXUser10Xx</h1>
            <div className="div-span-report-delete">
              <Inforeport />
              <Infodelete />
            </div>
          </li>
        </ul>
        <div>
          <h2>
            scroll down to load more info <span>&#129147;</span>
          </h2>
        </div>
      </div>
      <Filter />
    </>
  );
};

export default Listusers;
