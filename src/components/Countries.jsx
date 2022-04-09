import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Pages/Home/style.css";

export default class Countries extends Component {
  render() {
    const { countries, regionFilter, nameFilter } = this.props;

    const internationalNumberFormat = new Intl.NumberFormat("en-US");

    const countriesFilterPerRegion = countries.filter((countrie) =>
      regionFilter === "all" ? countries : countrie.region === regionFilter
    );

    const countriesFilterPerReginAndName = countriesFilterPerRegion.filter(
      (countrie) =>
        nameFilter === ""
          ? countriesFilterPerRegion
          : countrie.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    console.log("array filtrado", countriesFilterPerReginAndName, regionFilter);

    return (
      <div className="countries">
        {countriesFilterPerReginAndName.map((countrie) => {
          const { name, numericCode, population, capital, region, flags } =
            countrie;

          return (
            <Link to={`name/${name}`} key={numericCode}>
              <div className="countrie">
                <img
                  style={{ width: "250px", height: "150px" }}
                  src={flags.png}
                  alt={name}
                ></img>
                <div className="countrie__content">
                  <h2 className="countrie__content__name">{name}</h2>
                  <p>
                    Population :
                    <span> {internationalNumberFormat.format(population)}</span>
                  </p>
                  <p>
                    Capital : <span>{capital}</span>
                  </p>
                  <p>
                    Region : <span>{region}</span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    );
  }
}
