import React from 'react';
import './styles.css';

function CountryPage({ handleBack, country }) {

  return (
    <div className='country-page-container'>
      <div className='back-button-container'>
        <button onClick={handleBack}>back</button>
      </div>
      <div className='info-container'>
        <div className='flag-container'>
          <img src={country.flag} height="350px"></img>
        </div>
        <div className='country-info'>
          <div className='country-name'>{country.name}</div>
          <div className='country-other-info'>
            <div className='left-side-info'>  
              <span>Native Name: {country.nativeName}</span>  
              <span>Population: {country.population}</span>
              <span>Region: {country.region}</span>
              <span>Sub-region: {country.subregion}</span>
              <span>Capital: {country.capital}</span>
            </div>
            <div className='right-side-info'>
              <span>Top Level Domain: {country.topLevelDomain[0]}</span>
              <span>Currency: {country.currency}</span>
              <span>Languages: {country.languages.map((language, index) => <span key={index}>{language.name}{" "}</span>)}</span>
            </div>
          </div>
          <div className='country-borders'>Border Countries: {country.borders.length > 1 ? country.borders.map((border, index) => <span key={index}>{border}{" "}</span>) : "None"}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage
