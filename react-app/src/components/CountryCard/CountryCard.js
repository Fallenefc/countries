import React from 'react'
import './styles.css'

function CountryCard({name, population, region, capital, flag}) {
  return (
    <div className = 'country-card'>
      <div className='flag'>
        <img src={flag} width = '270px' height = '180px'></img>
      </div>
      <div className='card-info'>
        <h2>{name}</h2>
  <h4><span>Population: </span>{population}</h4>
  <h4><span>Region: </span>{region}</h4>
        <h4><span>Capital: </span>{capital}</h4>
      </div>
    </div>
  )
}

export default CountryCard
