import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const personsToShow = filter === ''
  ? persons
  : persons.filter(person =>
      (person.name?.toLowerCase() ?? '').includes(filter.toLowerCase()) ||
      (person.number?.toLowerCase() ?? '').includes(filter.toLowerCase())
    );


  useEffect(() => {
    personService
      .getAll()
      .then(initialNames => {
        setPersons(initialNames)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }

    const found = persons.some(persons => persons.name === newName);
    if (found) {
      alert(`${newName} is already added to phonebook`)
    } else {
      personService
      .create(nameObject)
      .then(returnedNote => {
        setPersons(persons.concat(returnedNote))
        setFilter('')
        setNewName('')
        setNewNumber('')
      })

    }
  }
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setFilter(event.target.value);
  }
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>add a new</h3>
      <PersonForm 
        addName={addName} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <Persons filteredPersons={personsToShow} />
      </div>
  )
}

export default App