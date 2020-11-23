import React from 'react';
import './styles.css';

function CountryPage({ handleBack, country }) {

  return (
    <div className='country-page-container'>
      <div className='back-button-container'>
        <button onClick={handleBack}><i class="fas fa-arrow-left"></i> Back</button>
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
              <span><strong>Population: </strong>{country.population}</span>
              <span><strong>Region: </strong>{country.region}</span>
              <span><strong>Sub-region: </strong>{country.subregion}</span>
              <span><strong>Capital: </strong>{country.capital}</span>
            </div>
            <div className='right-side-info'>
              <span><strong>Top Level Domain: </strong>{country.topLevelDomain[0]}</span>
              <span><strong>Currency: </strong>{country.currency}</span>
              <span><strong>Languages: </strong>{country.languages.map((language, index) => <span key={index}>{language.name}{" "}</span>)}</span>
            </div>
          </div>
          <div className='country-borders'><strong>Border Countries:</strong> {country.borders.length > 1 ? country.borders.map((border, index) => <span key={index}>{border}{" "}</span>) : "None"}</div>
        </div>
      </div>
    </div>
  )
}

export default CountryPage
