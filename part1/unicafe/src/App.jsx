import { useState } from 'react'

const Display = (props) => {
  console.log(props)
  return (
    <div>{props.name} {props.counter}</div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClicked = () => {
    console.log('Good clicked!')
    setGood(good + 1)
  }

  const handleNeutralClicked = () => {
    console.log('Neutral clicked!')
    setNeutral(neutral + 1)
  }

  const handleBadClicked = () => {
    console.log('Bad clicked!')
    setBad(bad + 1)
  }

  
  return (
    <div>
      <h1>Give Feedback!</h1>
      <button onClick={handleGoodClicked}>
        Good
      </button>
      <button onClick={handleNeutralClicked}> 
        Neutral
      </button>
      <button onClick={handleBadClicked}> 
        Bad
      </button>
      <h1>Statistics:</h1>
      <Display name='Good'counter={good}/>
      <Display name='Neutral'counter={neutral}/>
      <Display name='Bad'counter={bad}/>
    </div>
  )
}

export default App