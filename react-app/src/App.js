import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { useState, useEffect } from 'react';
import { getCountries } from './services/ApiService'

function App() {

  const [countries, setCountries] = useState(null);
  const [cache, setCache] = useState({});
  
  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
      setCache(data);
    })
  }, [])

  const searchBarInput = (input) => {
    const filteredList = cache.filter(el => el.name.toLowerCase().includes(input.toLowerCase()));
    setCountries(filteredList);
  }

  const selectInput = (value) => {
    if (value === 'all') {
      setCountries(cache);
    }
    else {
      const filteredList = cache.filter(el => el.region.toLowerCase().includes(value.toLowerCase()));
      setCountries(filteredList);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Dashboard countries={countries} searchBarInput={searchBarInput} selectInput={selectInput}/>
      </header>
    </div>
  );
}

export default App;
