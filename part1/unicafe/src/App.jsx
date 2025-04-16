import { useState } from 'react'

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>{text}</button>
)

const StatisticLine = (props) => {
  console.log(props)
  return (
    <div>{props.text} {props.value} {props.isPercentage ? '%' : ''} </div>
  )
}

const Statistics = (props) => {
  console.log(props)
  if (props.all == 0) {
    return (
      <div>
        <h1>Statistics:</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>Statistics:</h1>
      <StatisticLine text="Good" value={props.good} />
      <StatisticLine text="Neutral" value={props.neutral} />
      <StatisticLine text="Bad" value={props.bad} />
      <StatisticLine text="All" value={props.all} />
      <StatisticLine text="Average" value={props.average} />
      <StatisticLine text="Positive" value={props.positive} isPercentage={true}/>
    </div>
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
      <Button onClick={handleGoodClicked} text="Good" />
      <Button onClick={handleNeutralClicked} text="Neutral" />
      <Button onClick={handleBadClicked} text="Bad" />
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App