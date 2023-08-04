import React, { useEffect } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { titleChanged, taskDeleted, completedTask, getTasks, loadTasks, getTasksLoadingStatus, addTask } from './store/task'
import createStore from './store/store'
import Loader from './common/loader'
import { getError } from './store/errors'

export const store = createStore()

const App = () => {
  const state = useSelector(getTasks())
  const isLoading = useSelector(getTasksLoadingStatus())
  const error = useSelector(getError())
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTasks())
  }, [])

  return (
    <>
      <h1> App</h1>
      {isLoading
        ? <Loader/>
        : (error
          ? <h2>{error}!</h2>
          : <div>
              <button onClick={() => dispatch(addTask())}>add task</button>
              <ul>
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
          </div> 
        )
      }
    </>
  )
}

export default App
