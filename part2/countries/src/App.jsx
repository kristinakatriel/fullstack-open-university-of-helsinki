import Search from './components/Search'
import countryService from './services/countries'
import { useState, useEffect } from 'react'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  console.log(countries)

  const countriesFound = search === ''
  ? []
  : countries.filter(country =>
      (country.name.common?.toLowerCase() ?? '').includes(search.toLowerCase())
    );

  let content = null;

  if (countriesFound.length > 10) {
    content = <p>Too many matches, specify another filter</p>;
  } else if (countriesFound.length === 1) {
    console.log(countriesFound)
    content = (
      countriesFound.map(country => (
        <div key={country.name.common}>
          <h1>{country.name.common}</h1>
          <div>Capital {country.capital}</div>
          <div>Area {country.area}</div>
          <h2>Languages</h2>
          <ul>
            {Object.values(country.languages).map((lang, index) => (
              <li key={index}>{lang}</li>
            ))}
          </ul>
          <img
            src={country.flags.svg || country.flags.png}
            alt={country.flags.alt}
            width="150"
          />
        </div>
      ))
    );
  } else if (countriesFound.length > 0) {
    content = (
      countriesFound.map(country => (
        <div key={country.name.common}>{country.name.common}</div>
      ))
    );
  }

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
  }

  return (
    <div>
      <Search search={search} handleSearchChange={handleSearchChange}/>
      {content}
    </div>
  )
}

export default App