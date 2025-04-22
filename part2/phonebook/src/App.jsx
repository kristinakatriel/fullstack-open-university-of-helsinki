import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Example Name', number: '+61-1234567' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      number: newNumber
    }

    const found = persons.some(persons => persons.name === newName);
    if (found) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
    }
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
      <form onSubmit={addName}>
        name: 
        <input
          value={newName}
          onChange={handleNameChange}
        /><br/>
        number:
        <input
          value={newNumber}
          onChange={handleNumberChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>  
      <h2>Numbers</h2>
      {persons.map(persons =>
        <div key={persons.name}>
          {persons.name} {persons.number}
        </div>
      )}
    </div>
  )
}

export default App