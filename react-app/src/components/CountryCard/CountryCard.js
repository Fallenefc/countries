import React from 'react'

function CountryCard({name, population, region, capital, flag}) {
  return (
    <div>
      <div className='flag'>
        <img src={flag}></img>
      </div>
      <div className='card-info'>
        <h2>{name}</h2>
  <h3>{population}</h3>
  <h3>{region}</h3>
        <h3>{capital}</h3>
      </div>
    </div>
  )
}

export default CountryCard
