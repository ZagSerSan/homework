import React, { useEffect, useState } from 'react'
import { titleChanged, taskDeleted, completedTask } from './store/task'
import configureStore from './store/store'
import './App.css'

const store = configureStore()

const App = () => {
  const [state, setState] = useState(store.getState())

  useEffect(() => {
    store.subscribe(() => setState(store.getState()))
  }, [])

  return (
    <>
      <h1> App</h1>
      <ul>
        {state.map((el) => (
            <li key={el.id}>
              <p>{el.title}</p>
              <p> {`Completed: ${el.completed}`}</p>
              <button onClick={() => store.dispatch(completedTask(el.id))}>
                Complete
              </button>
              <button onClick={() => store.dispatch(titleChanged(el.id))} className='margin-none'>
                Change title
              </button>
              <button onClick={() => store.dispatch(taskDeleted(el.id))} className='margin-none'>
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
