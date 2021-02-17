import { Modal } from "@material-ui/core";
import React, { Component, useState, useEffect } from "react";
import "./style.css";

const Hook = () => {
  const [count, setCount] = useState(0);

  document.title = `(${count}) Home`;

  return (
    <div className="hook">
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};
export default Hook;
