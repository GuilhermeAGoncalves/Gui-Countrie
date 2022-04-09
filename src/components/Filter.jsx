import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <>
        <select className="select" onChange={this.props.handleChange}>
          <option value="all">All regions</option>
          <option value="Africa">Afríca</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
      </>
    );
  }
}
