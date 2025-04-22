const Course = ({ course }) => {
  console.log(course.parts)
  return (
    <div>
      <h1>{course.name}</h1>
        {course.parts.map(parts => 
          <p key={parts.id}>
            {parts.name} {parts.exercises}
          </p>
        )}
    </div>

  )
}

export default Course