import Search from './components/Search'
import Content from './components/Content'
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
      <Search search={search} handleSearchChange={handleSearchChange} />
      <Content countriesFound={countriesFound} />
    </div>
  )
}

export default App