import { useState } from 'react'

const Display = (props) => {
  console.log(props)
  return (
    <div>{props.name} {props.counter} {props.isPercentage ? '%' : ''} </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const handleGoodClicked = () => {
    console.log('Good clicked!')
    const newGood = good + 1
    const newAll = all + 1
    setGood(newGood)
    setAll(newAll)
    setAverage((newGood - bad) / newAll)
    setPositive((newGood / newAll) * 100)
  }

  const handleNeutralClicked = () => {
    console.log('Neutral clicked!')
    const newNeutral = neutral + 1
    const newAll = all + 1
    setNeutral(newNeutral)
    setAll(newAll)
    setAverage((good - bad) / newAll)
    setPositive((good / newAll) * 100)
  }

  const handleBadClicked = () => {
    console.log('Bad clicked!')
    const newBad = bad + 1
    const newAll = all + 1
    setBad(newBad)
    setAll(newAll)
    setAverage((good - newBad) / newAll)
    setPositive((good / newAll) * 100)
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
      <Display name='All'counter={all}/>
      <Display name='Average'counter={average}/>
      <Display name='Positive'counter={positive} isPercentage={true}/>
    </div>
  )
}

export default App