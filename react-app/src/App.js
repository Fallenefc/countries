import './App.css';
import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import { useState, useEffect } from 'react';
import { getCountries } from './services/ApiService'

function App() {

  const [countries, setCountries] = useState(null);
  // const [cache, setCache] = useState({});
  
  useEffect(() => {
    getCountries().then(data => {
      setCountries(data);
    })
    // setCache(data);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Dashboard countries={countries}/>
      </header>
    </div>
  );
}

export default App;
