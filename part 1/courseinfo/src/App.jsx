const Header = ({ course }) => {
  return <h1>{course}</h1>
}

const Part = (props) => {
  return (  
    <p>
      {props.part} {props.exercises}
    </p>
  )
}

const Content = ({ parts }) => {

  return (
    <div>
      <Part part={parts[0].name} exercises={parts[0].exercises} />
      <Part part={parts[1].name} exercises={parts[1].exercises} />
      <Part part={parts[2].name} exercises={parts[2].exercises} />
    </div>
  )
}



const Total = ({ parts }) => {
  return <p>
    Number of exercises {parts.reduce((sum, part) => sum + part.exercises, 0)}
    </p>
}

// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//      <Header course={course.name} />
//      <Content parts={course.parts} />
//      <Total parts={course.parts} />
//     </div>
//   )
// }
 import { useState } from 'react'
const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {value}
      <button onClick={() => setToValue(1000)}>
        thousand
      </button>
      <button onClick={() => setToValue(0)}>
        reset
      </button>
      <button onClick={() => setToValue(value + 1)}>
        increment
      </button>
    </div>
  )
}

export default App;
