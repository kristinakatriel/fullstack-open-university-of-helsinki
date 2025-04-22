import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [filter, setFilter] = useState('')
  const [filteredPersons, setFilteredPersons] = useState(persons)
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
  const handleFilterChange = (event) => {
    console.log(event.target.value)
    const term = event.target.value;
    setFilter(term);
    console.log(persons)
    console.log(term)
    const filteredItems = persons.filter(persons =>
      persons.name.toLowerCase().includes(term.toLowerCase()) ||
      persons.number.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredPersons(filteredItems);
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
      <h1>Phonebook</h1>
      filter shown with
        <input
          value={filter}
          onChange={handleFilterChange}
        /><br/>
      <h2>add a new</h2>
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
      {filteredPersons.map(persons =>
        <div key={persons.name}>
          {persons.name} {persons.number}
        </div>
      )}
    </div>
  )
}

export default App