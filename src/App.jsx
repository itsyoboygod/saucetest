import React, { Component, useState } from "react";
import Header from "./components/Header";
import All from "./components/All";
import NewsFooter from "./components/NewsFooter";
import Home from "./Home";
import Routes from "./routes";
import { BrowserRouter, Switch, Route, Router } from "react-router-dom";

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />
      <Routes />
      {/* <NewsFooter/> */}
    </BrowserRouter>
  </div>
);

export default App;
