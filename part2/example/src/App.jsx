import Note from './components/Note'

const App = ({ notes }) => {
  // We are only interested in the field notes of the props, so let's retrieve that directly using destructuring:
  // const { notes } = props

  return (
    <div>
      <h1>Notes</h1>

      {/* Only works due to the fact that there are exactly three notes in the array. */}
      <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
      </ul>

      {/* We can improve on this by generating React elements from the array objects using the map function. */}
      {/* Because the code generating the li tags is JavaScript, it must be wrapped in curly braces in a JSX template just like all other JavaScript code. */}
      <ul>
        {notes.map(note => 
          <li key={note.id}>
            {note.content}
          </li>
        )}
      </ul>

      {/* This is, however, not recommended and can create undesired problems even if it seems to be working just fine. */}
      <ul>
        {notes.map((note, i) => 
          <li key={i}>
            {note.content}
          </li>
        )}
      </ul>

      <ul>
        {notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>

    </div>
  )
}

export default App