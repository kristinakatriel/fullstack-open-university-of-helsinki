const Course = ({ course }) => {
  console.log(course.parts)

  const total = 
    course.parts.reduce(( sum, {exercises} ) => sum + exercises , 0)
  console.log(total)

  return (
    <div>
      <h2>{course.name}</h2>
        {course.parts.map(parts => 
          <p key={parts.id}>
            {parts.name} {parts.exercises}
          </p>
        )}
        <b>total of {total} exercises</b>
    </div>

  )
}

export default Course