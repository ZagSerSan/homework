import React, { useEffect, useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { titleChanged, taskDeleted, completedTask, getTasks } from './store/task'
import createStore from './store/store'
import Loader from './common/loader'

export const store = createStore()

const App = () => {
  const state = useSelector(state => state.tasks.entities)
  const isLoading = useSelector(state => state.tasks.isLoading)
  const error = useSelector(state => state.errors.entities[0])
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTasks())
  }, [])

  return (
    <>
      <h1> App</h1>
      {isLoading
        ? <Loader/>
        : (error
          ? <h2>{error}!</h2>
          : <ul>
            {state.map((el) => (
              <li key={el.id}>
                <p>{el.title}</p>
                <p> {`Completed: ${el.completed}`}</p>
                <button onClick={() => dispatch(completedTask(el.id))}>
                  Complete
                </button>
                <button onClick={() => dispatch(titleChanged(el.id))} className='margin-none'>
                  Change title
                </button>
                <button onClick={() => dispatch(taskDeleted(el.id))} className='margin-none'>
                  Delete title
                </button>
                <hr />
              </li>
            ))}
          </ul>
        )
      }
    </>
  )
}

export default App
