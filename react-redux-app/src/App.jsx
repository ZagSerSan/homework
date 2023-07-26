import './App.css'

function createStore(initialState) {
  let state = initialState

  function getState() {
    return state
  }
  return {getState}
}

const store = createStore([{id: 1, description: 'Task 1'}])

const App = () => {
  console.log(store.getState())
  return (
    <h1>app</h1>
  )
}

export default App
