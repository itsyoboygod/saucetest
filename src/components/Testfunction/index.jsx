import { render } from "@testing-library/react";
import React, { useState, useEffect } from "react";

const FunctionTest = () => {
  const [showLoading, setShowLoading] = useState(true);
  let timer1 = setTimeout(() => setShowLoading(true), 1000);
  useEffect(() => {
    return () => {
      clearTimeout(timer1);
    };
  }, [showLoading]);
};
export default FunctionTest;
