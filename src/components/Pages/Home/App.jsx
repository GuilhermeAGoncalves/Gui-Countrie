import React, { Component } from "react";
import Countries from "../../Countries";
import Filter from "../../Filter";
import Header from "../../Header";
import "./style.css";
import { BsSearch } from "react-icons/bs";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      countries: [],
      darkMode: true,
      region: "all",
      name: "",
    };

    this.setFilter = this.setFilter.bind(this);
    this.setName = this.setName.bind(this);
  }

  async componentDidMount() {
    const res = await fetch("https://restcountries.com/v2/all");

    const json = await res.json();

    this.setState({ countries: json });
  }

  setFilter($event) {
    this.setState({ region: $event.target.value });
    console.log(this.state.region);
  }

  setName($event) {
    this.setState({ name: $event.target.value });
    console.log("nome do pais", this.state.name);
  }

  render() {
    const { countries, darkMode } = this.state;

    console.log(countries);
    console.log(darkMode);

    return (
      <>
        <Header darkMode={darkMode} />
        <div className="elements">
          <div className="input__elements">
            <BsSearch />
            <input
              placeholder="Seach for a country..."
              className="seach"
              onChange={this.setName}
            />
          </div>
          <Filter handleChange={this.setFilter} />
        </div>
        <Countries
          countries={countries}
          regionFilter={this.state.region}
          nameFilter={this.state.name}
        />
      </>
    );
  }
}
