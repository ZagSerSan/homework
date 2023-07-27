import './App.css'
import { useEffect, useState } from 'react'
import * as actionTypes from './store/actionTypes'
import { initiateStore } from './store/store'


const store = initiateStore()

// component
const App = () => {
  const [state, setState] = useState(store.getState())
  
  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const completeTask = (taskId) => {
    store.dispatch({
      type: actionTypes.taskUpdated,
      payload: {id: taskId, completed: true}
    })
  }
  const changeTitle = (taskId) => {
    store.dispatch({
      type: actionTypes.taskUpdated,
      payload: {id: taskId, title: `New title for ${taskId}`}
    })
  }

  return (
    <>
      <h1>app</h1>
      <ul>
        {state.map(task => <li key={task.id}>
          <p>{task.title}</p>
          <p>{`Completed: ${task.completed}`}</p>
          <button onClick={()=>completeTask(task.id)}>Complete</button>
          <button onClick={()=>changeTitle(task.id)}>Change title</button>
          <hr/>
        </li>)}
      </ul>
    </>
  )
}

export default App
