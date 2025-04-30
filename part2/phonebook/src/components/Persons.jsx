const Persons = ({ deleteName, filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map(person =>
        <div key={person.id}>
          {person.name} {person.number} 
          <button onClick={() => deleteName(person.name, person.id)}>delete</button>
        </div>
      )}
    </div>
  )
}

export default Persons
