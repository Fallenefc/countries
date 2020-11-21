import React from 'react'

function CountryPage(props) {

  return (
    <div>
      <button onClick={props.handleBack}>back</button>
      {props.country.name}
    </div>
  )
}

export default CountryPage
