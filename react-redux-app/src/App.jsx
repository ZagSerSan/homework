import { useEffect, useState } from 'react'
import './App.css'

function taskReducer(state, action) {
  switch (action.type) {
    case 'task/completed':
      const newArray = [...state]
      const elementIndex = newArray.findIndex(el => el.id === action.payload.id)
      newArray[elementIndex].completed = !newArray[elementIndex].completed
      return newArray
      break;
  
    default:
      break;
  }
}
function createStore(reducer, initialState) {
  let state = initialState
  let listeners = []

  function getState() {
    return state
  }
  function dispatch(action) {
    state = reducer(state, action)
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i]
      listener()
    }
  }
  // функция добавления слушателей (в listeners)
  function subscribe(listener) {
    listeners.push(listener)
  }
  return { getState, dispatch, subscribe }
}
const store = createStore(taskReducer, [
  {id: 1, description: 'Task 1', completed: false},
  {id: 2, description: 'Task 2', completed: false}
])
const completeTask = (taskId) => {
  store.dispatch({ type: 'task/completed', payload: {id: taskId}})
}

// component
const App = () => {
  const [state, setState] = useState(store.getState())
  // const state = store.getState()
  
    useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  return (
    <>
      <h1>app</h1>
      <ul>
        {state.map(task => <li key={task.id}>
          <p>{task.description}</p>
          <p>{`Completed: ${task.completed}`}</p>
          <button onClick={()=>completeTask(task.id)}>Complete</button>
          <hr/>
        </li>)}
      </ul>
    </>
  )
}

export default App
