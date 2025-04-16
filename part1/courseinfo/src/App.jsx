const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Part = ({ name, exercises }) => {
  console.log(name, exercises)
  return <p>{name} {exercises}</p>
}

const Content = ({ parts }) => {
  console.log(parts)
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises} />
      <Part name={parts[1].name} exercises={parts[1].exercises} />
      <Part name={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>Number of exercises {props.total}</p>
    </div>
  )
}

const App = () => {
  const parts = [
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 },
  ]
  
  return (
    <div>
      <Header name='Half Stack application development'/>
      <Content parts={parts} />
      <Total total={10 + 7 + 14}/>
    </div>
  )
}

export default App