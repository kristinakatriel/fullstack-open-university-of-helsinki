import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' },
    { name: 'Example Name' }
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
    }

    const found = persons.some(persons => persons.name === newName);
    if (found) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <input
          value={newName}
          onChange={handleNameChange}
        />
        <div>
          <button type="submit">add</button>
        </div>
      </form>  
      <h2>Numbers</h2>
      {persons.map(persons =>
        <div key={persons.name}>
          {persons.name}
        </div>
      )}
    </div>
  )
}

export default App