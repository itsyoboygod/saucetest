import { render } from "@testing-library/react";
import React from "react";
import "./style.css";

const Tootlip = () => (
  <>
    <div class="tooltip">
      <p> Hover over me</p>
      <span class="tooltiptext">Tooltip text</span>
    </div>
  </>
);

export default Tootlip;
