import { createSlice } from '@reduxjs/toolkit'
import todosService from '../services/todos.service'
import { setError } from './errors'

const initialState = {entities: [], isLoading: true}

// createSlice
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    add(state, action) {
      state.entities.push(
        {
          ...action.payload,
          id: state.entities.length + 1
        }
      )
      state.isLoading = false
    },
    recived(state, action) {
      state.entities = action.payload
      state.isLoading = false
    },
    update(state, action) {
      const elementIndex = state.entities.findIndex(
        (el) => el.id === action.payload.id
      )
      state.entities[elementIndex] = {
        ...state.entities[elementIndex],
        ...action.payload,
      }
    },
    remove(state, action) {
      state.entities = state.entities.filter(el => el.id !== action.payload.id)
    },
    taskRequested(state) {
      state.isLoading = true
    },
    taskRequestFailed(state) {
      state.isLoading = false
    }
  }
})

const { actions, reducer: taskReducer } = taskSlice
const { add, update, remove, recived, taskRequested, taskRequestFailed } = actions

export const loadTasks = () => async (dispatch) => {
  dispatch(taskRequested())
  try {
    const data = await todosService.fetch()
    dispatch(recived(data))
  } catch (error) {
    dispatch(taskRequestFailed(error.message))
    dispatch(setError(error.message))
  }
}
export const addTask = () => async (dispatch) => {
  dispatch(taskRequested())
  try {
    const data = await todosService.add()
    dispatch(add(data))
  } catch (error) {
    dispatch(taskRequestFailed(error.message))
    dispatch(setError(error.message))
  }
}

export const getTasks = () => (state) => state.tasks.entities
export const getTasksLoadingStatus = () => (state) => state.tasks.isLoading

export const completedTask = (id) => (dispatch) => {
  dispatch(update({ id, completed: true }))
}
// посредством каррирования
export function titleChanged(id) {
  return function(dispatch) {
    dispatch(update({ id, title: 'Changed..' }))
  }
}
export function taskDeleted(id) {
  return function(dispatch) {
    dispatch(remove({ id }))
  }
}

export default taskReducer
