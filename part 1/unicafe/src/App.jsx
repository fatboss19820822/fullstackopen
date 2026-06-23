import { useState } from 'react'

// a proper place to define a component
const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = total === 0 ? 0 : (good - bad) / total
  const positive =  total === 0 ? 0 : (good / total) * 100

  return (
    <div>
      <h2>statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const total = good + neutral + bad


  return (
    <div>
      <h1>Give feedback</h1>
      <button onClick={() => setGood(good+1)}>good</button>
      <button onClick={() => setNeutral(neutral+1)}>neutral</button>
      <button onClick={() => setBad(bad+1)}>bad</button>
      {total === 0
        ? <p>No feedback given</p>
        : <Statistics good={good} neutral={neutral} bad={bad} />
      }
      
    </div>
  )
}

export default App
