import React from "react";
import CountryCard from "../CountryCard/CountryCard";
import SearchBar from "../SearchBar/SearchBar";
import "./styles.css";

function Dashboard({ countries }) {
  return (
    <div className="dashboard-container">
      <div className="search-and-filter">
        <div className="search-bar">
          <SearchBar />
        </div>
        <div className = 'continent-selector'>
          <select>
            {/* Add Filter by Region placeholder on select menu */}
            <option>Africa</option>
            <option>Americas</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Oceania</option>
          </select>
        </div>
      </div>
      {countries
        ? countries.map((country, index) => {
            return (
              <div className="country-list">
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
  );
}

export default Dashboard;
