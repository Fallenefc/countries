import React from 'react';
import './styles.css';

function CountryPage({ handleBack, country, handleCountryPage }) {

  return (
    <div className='country-page-container'>
      <div className='back-button-container'>
        <button onClick={handleBack}><i className="fas fa-arrow-left"></i> Back</button>
      </div>
      <div className='info-container'>
        <div className='flag-container'>
          <img src={country.flag} height="350px"></img>
        </div>
        <div className='country-info'>
          <div className='country-name'>{country.name}</div>
          <div className='country-other-info'>
            <div className='left-side-info'>  
              <span><strong>Native Name:</strong> {country.nativeName}</span>  
              <span><strong>Population: </strong>{country.population.toLocaleString()}</span>
              <span><strong>Region: </strong>{country.region}</span>
              <span><strong>Sub-region: </strong>{country.subregion}</span>
              <span><strong>Capital: </strong>{country.capital}</span>
            </div>
            <div className='right-side-info'>
              <span><strong>Top Level Domain: </strong>{country.topLevelDomain[0]}</span>
              <span><strong>Currency: </strong>{country.currencies.map((currency, index) => <span key={index}>{currency.name}{" "}</span>)}</span>
              <span><strong>Languages: </strong>{country.languages.map((language, index) => <span key={index}>{language.name}{" "}</span>)}</span>
            </div>
          </div>
          <div className='country-borders'><strong>Border Countries:</strong> {country.borders.length > 0 ? country.borders.map((border, index) => <button key={index} onClick={() => handleCountryPage(border)}>{border}{" "}</button>) : "None"}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage
