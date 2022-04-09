import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowBarLeft } from "react-icons/bs";
import axios from "axios";
import Header from "../../Header";
import "./style.css";

function Countrie() {
  const params = useParams();
  const [countrie, setCountrie] = useState("");

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/name/${params.id}`)
      .then((response) => setCountrie(response.data[0]));
  }, [params.id]);
  const {
    name,
    capital,
    flags,
    nativeName,
    population,
    region,
    subregion,
    borders,
    topLevelDomain,
    currencies,
    languages,
  } = countrie;

  return (
    <>
      <Header />
      <Link to="/">
        <button className="back">{<BsArrowBarLeft />} Back</button>
      </Link>
      <div className="section">
        {flags && (
          <div className="countrie__img">
            <img src={flags.png} alt={name}></img>
          </div>
        )}
        <div className="countrie__infos">
          {name && <h1>{name}</h1>}
          <div className="countrie__infos__basic">
            <div className="right">
              {nativeName && (
                <p>
                  {" "}
                  Native Name : <span>{nativeName}</span>
                </p>
              )}
              {population && (
                <p>
                  Population : <span>{population}</span>
                </p>
              )}
              {region && (
                <p>
                  Region : <span>{region}</span>
                </p>
              )}
              {subregion && (
                <p>
                  {" "}
                  Sub Region : <span>{subregion}</span>
                </p>
              )}
            </div>

            <div className="left">
              {capital && (
                <p>
                  Capital : <span>{capital}</span>
                </p>
              )}
              {topLevelDomain && (
                <p>
                  Top Level Domain : <span>{topLevelDomain}</span>
                </p>
              )}
              {currencies && (
                <p>
                  Currencies :{" "}
                  <span>
                    {currencies.map((currencie) => (
                      <span key={currencie.code}>{currencie.name} </span>
                    ))}
                  </span>
                </p>
              )}
              {languages && (
                <p>
                  languages :{" "}
                  {languages.map((language) => (
                    <span key={language.iso639_1}>{language.name} </span>
                  ))}{" "}
                </p>
              )}
            </div>
          </div>

          <div className="countrie__bordes">
            {borders && (
              <p>
                Border Countrie :{" "}
                {borders.map((countrie) => (
                  <span key={countrie}>{countrie} </span>
                ))}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Countrie;
