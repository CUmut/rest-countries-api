import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import regions from "../common/common";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [filterRegion, setFilteredRegion] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    try {
      const { data } = await axios.get("https://restcountries.com/v2/all");
      setCountries(data);
    } catch (error) {
      alert("Ülkeler listesine erişilemiyor..");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setFiltered(
      countries.filter((country) =>
        country.name.toUpperCase().includes(search.toUpperCase())
      )
    );
  }, [countries, search]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <section className="filter">
        <input
          className="input"
          type="text"
          key="random1"
          value={search}
          placeholder="search country"
          onChange={handleSearch}
        />
      </section>

      <section className="grid">
        {filtered.map((country) => {
          const { numericCode, name, flag, population, region, capital } =
            country;
          return (
            <Link to={`/countries/${name}`} key={numericCode}>
              <article key={numericCode}>
                <div className="flag">
                  <img src={flag} alt={name}></img>
                </div>
                <div className="details">
                  <h4 className="country-name">
                    Name : <span>{name}</span>
                  </h4>
                  <h4>
                    Population : <span>{population.toLocaleString()}</span>
                  </h4>
                  <h4>
                    Region : <span>{region}</span>
                  </h4>
                  <h4>
                    Capital : <span>{capital}</span>
                  </h4>
                  <button className="btn">Learn More</button>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}
