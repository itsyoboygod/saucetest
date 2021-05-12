import React from "react";

import "./style.css";

const Listusers = () => {
  return (
    <div className="users-list">
      <ul>
        <li>
          <h1>name</h1>
          <div className="div-span-report-delete">
          <span>🗑</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Listusers;
