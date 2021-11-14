import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/fontawesome-free-solid";
import "../country.css";
import axios from "axios";

function Country() {
  const [country, setCountry] = useState([]);
  const { name } = useParams();
  const { isLoading } = useState(true);

  const fetchDataCountry = async () => {
    try {
      const { data } = await axios.get(
        `https://restcountries.com/v2/name/${name}`
      );
      setCountry(data);
    } catch (error) {
      alert(error, "Seçilen Ülkeye erişilemiyor");
    }
  };

  useEffect(() => {
    fetchDataCountry();
  }, []);

  return (
    <>
      <section className="country">
        <Link to="/" className="btn btn-light">
          <FontAwesomeIcon icon={faArrowLeft} />
          BACK HOME
        </Link>
        {country &&
          country.map((c) => {
            const {
              numericCode,
              flag,
              name,
              nativeName,
              population,
              region,
              subregion,
              capital,
              topLevelDomain,
              currencies,
              languages,
              borders,
            } = c;
            return (
              <article key={numericCode}>
                <div className="country-inner">
                  <div className="flag">
                    <img src={flag} alt={name} />
                  </div>

                  <div className="counrty-details">
                    <div>
                      <h2>{name}</h2>
                      <h5>
                        Native Name : <span>{nativeName}</span>
                      </h5>
                      <h5>
                        Population :<span>{population.toLocaleString()}</span>
                      </h5>
                      <h5>
                        Region : <span>{region}</span>
                      </h5>
                      <h5>
                        Sub Region :<span>{subregion}</span>
                      </h5>
                      <h5>Capital : {capital}</h5>
                    </div>

                    <div>
                      <h5>
                        Top Level Domain : <span>{topLevelDomain}</span>
                      </h5>
                      <h5>
                        Currencies : <span>{currencies[0].name}</span>
                      </h5>
                      <h5>
                        Languages : <span>{languages[0].name}</span>
                      </h5>
                    </div>
                    <div>
                      <h3>Border Countries</h3>
                      <div className="borders">
                        {borders &&
                          borders.map((border) => {
                            return (
                              <ul key={border}>
                                <li>{border}</li>
                              </ul>
                            );
                          })}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
      </section>
    </>
  );
}

export default Country;
