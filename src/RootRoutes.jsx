import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/Pages/Home/App";
import Countrie from "./components/Pages/Countrie/Countrie";

export default class RootRoutes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path={"name/:id"} element={<Countrie />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
