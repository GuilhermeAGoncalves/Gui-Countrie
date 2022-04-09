import React, { Component } from "react";
import "./Pages/Home/style.css";
import { BsMoonStars } from "react-icons/bs";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="title">Where in the world?</h1>
        <button className="button">
          <BsMoonStars />
          Dark Mode
        </button>
      </header>
    );
  }
}
