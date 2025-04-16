import { useState } from 'react'

const DisplayVotes = (props) => {
  console.log(props)
  return (
    <div>
      Has {props.num} votes.
    </div>
  )
}
const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

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
      {anecdotes[selected]}<br />
      <DisplayVotes num={array[selected]}/>
      <Button onClick={handleVoteClicked} text="Vote" />
      <Button onClick={handleNextClicked} text="Next Anecdote" />
    </div>
  )
}

export default App