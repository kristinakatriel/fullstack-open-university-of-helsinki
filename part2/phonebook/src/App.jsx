import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import { useState, useEffect } from 'react'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [sucessMessage, setSuccessMessage] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

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
        const cleanedNames = initialNames.filter(person => person.name);
        setPersons(cleanedNames);
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber,
      id: String(Date.now()),
    }
    const found = persons.some(persons => persons.name === newName);
    const personToUpdate = persons.find(persons => persons.name === newName);
    console.log(personToUpdate)
    if (found) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        console.log('OK')
        personService
        .update(personToUpdate.id, nameObject)
        .then(() => {
          setSuccessMessage(
            `Updated ${newName}`
          )
          setTimeout(() => {
            setSuccessMessage(null)
          }, 5000)
          setPersons(persons.map(person =>
            person.id === personToUpdate.id ? {...person, number: nameObject.number} : person
          ))
          setFilter('')
          setNewName('')
          setNewNumber('')
        })
        .catch(() => {
          setErrorMessage(
            `Information of ${newName} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      } else {
        console.log('Cancel')
      }
    } else {
      personService
      .create(nameObject)
      .then(returnedNote => {
        setSuccessMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setSuccessMessage(null)
        }, 5000)
        setPersons(persons.concat(returnedNote))
        setFilter('')
        setNewName('')
        setNewNumber('')
      })
    }
  }
  const deleteName = (personName, personId) => {
    console.log('trying to delete', personId)
    if (window.confirm(`Delete ${personName} ?`)) {
      const found = persons.some(persons => persons.id === personId);
      console.log(found)
      if (found) {
        personService
        .remove(personId)
        .then(() => {
          setPersons(persons.filter(person => {
            return person.id != personId;
          }))
          setFilter('')
          setNewName('')
          setNewNumber('')
        })
        .catch(() => {
          setErrorMessage(
            `Information of ${personName} has already been removed from server`
          )
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        })
      }
    } else {
      console.log('Cancel')
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
      <Notification message={sucessMessage} type='success'/>
      <Notification message={errorMessage} type='error'/>
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
      <Persons
        filteredPersons={personsToShow}
        deleteName={deleteName}
      />
      </div>
  )
}

export default App