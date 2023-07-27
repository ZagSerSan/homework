import './App.css'
import { useEffect, useState } from 'react'
import { initiateStore } from './store/store'
import * as actions from './store/actions'

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
    store.dispatch(actions.taskCompleted(taskId))
  }
  const changeTitle = (taskId) => {
    store.dispatch(actions.titleChanged(taskId))
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
