import './App.css'
import {compose, pipe} from 'lodash/fp'

const App = () => {
  const x = 2
  const double = (num) => num * 2
  const square = (num) => num * num
  const half = (num) => num / 2

  const mathCalculate = compose (half, square, double)

  return (
    <h1>{mathCalculate(x)}</h1>
    // <h1>app</h1>
  )
}

export default App
