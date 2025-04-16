const Header = (props) => {
  console.log(props)
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
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
  // const course = 'Half Stack application development'
  // const part1 = 'Fundamentals of React'
  // const exercises1 = 10
  // const part2 = 'Using props to pass data'
  // const exercises2 = 7
  // const part3 = 'State of a component'
  // const exercises3 = 14

  return (
    <div>
      <Header name='Half Stack application development'/>
      {/* <h1>{course}</h1> */}
      <Content part='Fundamentals of React' exercise='10'/>
      <Content part='Using props to pass data' exercise='7'/>
      <Content part='State of a component' exercise='14'/>
      {/* <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p> */}
      <Total total={10 + 7 + 14}/>
      {/* <p>Number of exercises {exercises1 + exercises2 + exercises3}</p> */}
    </div>
  )
}

export default App