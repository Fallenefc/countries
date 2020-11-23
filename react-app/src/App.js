import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { useState, useEffect } from 'react';
import { getCountries } from './services/ApiService'
import CountryPage from './components/CountryPage/CountryPage';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner';

function App() {

  const [countries, setCountries] = useState(null);
  const [cache, setCache] = useState({});
  const [country, setCountry] = useState(null);

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
    setCountries(cache);
  }

  const handleCountryPage = (alpha3Code) => {
    let filteredArr = [...cache];
    filteredArr = cache.filter((country) => country.alpha3Code === alpha3Code);
    setCountry(filteredArr[0]);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        {countries ? country ? <CountryPage country={country} handleBack={handleBack} handleCountryPage={handleCountryPage} /> : <Dashboard countries={countries} searchBarInput={searchBarInput} selectInput={selectInput} handleCountryPage={handleCountryPage} /> : <div className='loader'> <Loader
          type="Audio"
          color="red"
          height={200}
          width={200}
          timeout={3000} //3 secs
        /> </div>}
      </header>
    </div>
  );
}

export default App;
