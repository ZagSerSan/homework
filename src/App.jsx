import React, { useEffect, useState } from 'react'
import * as actions from './store/actions'
import { initiateStore } from './store/store'
import './App.css'

const store = initiateStore()

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
  const deleteTitle = (taskId) => {
    store.dispatch(actions.titleDeleted(taskId))
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
              <button onClick={() => deleteTitle(el.id)} className='margin-none'>
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
