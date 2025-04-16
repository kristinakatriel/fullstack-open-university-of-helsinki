import { useState } from 'react'

const DisplayVotes = (props) => {
  console.log(props)
  return (
    <div>
      Has {props.num} {props.num === 1 ? 'vote' : 'votes'}.
    </div>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const DisplayHighlyVoted = (props) => {
  console.log(props)
  console.log(Math.max(...props.array))
  console.log(props.array.indexOf(Math.max(...props.array)))
  console.log(props.anecdotes[props.array.indexOf(Math.max(...props.array))])
  const votedAnecdote = props.anecdotes[props.array.indexOf(Math.max(...props.array))]
  const numVotes = Math.max(...props.array)
  if (numVotes == 0) {
    return (
      <div>
        No votes have been cast yet.
      </div>
    )
  }
  return (
    <div>
      {votedAnecdote}<br /><br />
      Has {numVotes} {numVotes === 1 ? 'vote' : 'votes'}.
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [array, setArray] = useState(Array(anecdotes.length).fill(0));

  const handleVoteClicked = () => {
    console.log('Vote clicked!');
    const copy = [...array]; 
    copy[selected] += 1;
    setArray(copy);
    console.log(copy);
  };

  const handleNextClicked = () => {
    console.log('Next clicked!')
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      {anecdotes[selected]}<br /><br />
      <DisplayVotes num={array[selected]}/><br />
      <Button onClick={handleVoteClicked} text="Vote" />
      <Button onClick={handleNextClicked} text="Next Anecdote" />
      <h1>Anecdote with most votes</h1>
      <DisplayHighlyVoted array={array} anecdotes={anecdotes}/>
    </div>
  )
}

export default App