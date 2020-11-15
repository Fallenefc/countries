import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import SearchBar from "../SearchBar/SearchBar";
import "./styles.css";

function Dashboard({ countries, searchBarInput, selectInput }) {
  return (
    <div className="dashboard-container">
      <div className="search-and-filter">
        <div className="search-bar">
          <SearchBar searchBarInput={searchBarInput}/>
        </div>
        <div className = 'continent-selector'>
          <select className = 'selector' onChange={(event) => {
            selectInput(event.target.value)
          }}>
            {/* Add Filter by Region placeholder on select menu */}
            <option value='all'>All Regions</option>
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      <div className = 'country-list'>
      {countries
        ? countries.map((country, index) => {
            return (
              <div className="country-list" key={index}>
                <CountryCard
                  name={country.name}
                  flag={country.flag}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              </div>
            );
          })
        : "Loading"}
        </div>
    </div>
  );
}

export default Dashboard;
