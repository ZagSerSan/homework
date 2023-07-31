import React, { useEffect, useState } from 'react'
import { taskCompleted, titleChanged, taskDeleted } from './store/task'
import configureStore from './store/store'
import './App.css'

const store = configureStore()

const App = () => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(() => {
      setState(store.getState())
    })
  }, [])

  const completeTask = (taskId) => {
    store.dispatch(taskCompleted(taskId))
  }
  const changeTitle = (taskId) => {
    store.dispatch(titleChanged(taskId))
  }
  const deleteTask = (taskId) => {
    store.dispatch(taskDeleted(taskId))
  }

  return (
    <>
      <h1> App</h1>
      <ul>
        {state.map((el) => (
            <li key={el.id}>
              <p>{el.title}</p>
              <p> {`Completed: ${el.completed}`}</p>
              <button onClick={() => completeTask(el.id)}>
                Complete
              </button>
              <button onClick={() => changeTitle(el.id)} className='margin-none'>
                Change title
              </button>
              <button onClick={() => deleteTask(el.id)} className='margin-none'>
                Delete title
              </button>
              <hr />
            </li>
        ))}
      </ul>
    </>
  )
}

export default App
