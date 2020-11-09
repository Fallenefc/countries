import React from 'react'

function SearchBar({searchBarInput}) {

  return (
    <div className = 'lupa-search'>
      <div className = 'lupa'>
        <i className="fas fa-search fa-lg"></i>
      </div>
      <div className = 'input'><input type='text' placeholder ='        Search country...' className = 'text-input' onChange={(event) => {
        searchBarInput(event.target.value)
      }}></input></div>
    </div>
  )
}

export default SearchBar
