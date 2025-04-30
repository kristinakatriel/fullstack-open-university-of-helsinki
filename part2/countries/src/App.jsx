import Search from './components/Search'
import Content from './components/Content'
import CountryDetails from './components/CountryDetails';
import countryService from './services/countries'
import { useState, useEffect } from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [country, setCountry] = useState(null)

  const countriesFound = search === ''
  ? []
  : countries.filter(country =>
      (country.name.common?.toLowerCase() ?? '').includes(search.toLowerCase())
    );

  useEffect(() => {
    countryService
      .getAll()
      .then(countries => {
        setCountries(countries);
      })
  }, [])

  const handleSearchChange = (event) => {
    console.log(`Searching: ${event.target.value}`)
    setSearch(event.target.value);
    if (event.target.value === '') {
      setCountry(null);
    }
  }

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <div>
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Content countriesFound={countriesFound} handleCountryChange={handleCountryChange} />
      {country ? <CountryDetails country={country} /> : null}
    </div>
  )
}

export default App