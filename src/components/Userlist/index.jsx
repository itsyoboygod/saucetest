import React from "react";
import Inforeportbtn from "../Infos/Inforeportbtn";

import "./style.css";

const Listusers = () => {
  return (
    <div className="users-list">
      <ul>
        <li>
          <h1>xXUserXx</h1>
          <div className="div-span-report-delete">
          <span>!</span>
          <span>🗑</span>
          </div>
        </li>
        <li>
          <h1>name</h1>
          <div className="div-span-report-delete">
          <span>!</span>
          <span>🗑</span>
          </div>
        </li><li>
          <h1>name</h1>
          <div className="div-span-report-delete">
          <span>!</span>
          <span>🗑</span>
          </div>
        </li><li>
          <h1>name</h1>
          <div className="div-span-report-delete">
          <span>!</span>
          <span>🗑</span>
          </div>
        </li><li>
          <h1>name</h1>
          <div className="div-span-report-delete">
          <span>!</span>
          <span>🗑</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Listusers;
