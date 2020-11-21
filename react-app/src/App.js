import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { useState, useEffect } from 'react';
import { getCountries } from './services/ApiService'
import CountryPage from './components/CountryPage/CountryPage';

function App() {

  const [countries, setCountries] = useState(null);
  const [cache, setCache] = useState({});
  const [country, setCountry] = useState(true);
  
  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
      setCache(data);
      console.log(data)
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

  const handleBack = () => {
    setCountry(null);
  }

  const handleCountryPage = (index) => {
    setCountry(countries[index]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {countries ? country ? <CountryPage country={country} handleBack={handleBack}/> : <Dashboard countries={countries} searchBarInput={searchBarInput} selectInput={selectInput} handleCountryPage={handleCountryPage}/> : <div>Loading...</div>}
      </header>
    </div>
  );
}

export default App;
