const Persons = ({ filteredPersons }) => {
  return (
    <div>
      {filteredPersons.map(persons =>
        <div key={persons.name}>
          {persons.name} {persons.number}
        </div>
      )}
    </div>
  )
}

export default Persons
