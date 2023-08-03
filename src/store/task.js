import { createAction, createSlice } from '@reduxjs/toolkit'
import todosService from '../services/todos.service'

const initialState = {entities: [], isLoading: true, error: null}

// createSlice
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
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
      return state.entities.filter(el => el.id !== action.payload.id)
    },
    taskRequested(state) {
      state.isLoading = true
    },
    taskRequestFailed(state, action) {
      state.isLoading = false
      state.error = action.payload
    }
  }
})

const { actions, reducer: taskReducer } = taskSlice
const { update, remove, recived, taskRequested, taskRequestFailed } = actions

export const getTasks = () => async (dispatch) => {
  dispatch(taskRequested())
  try {
    const data = await todosService.fetch()
    dispatch(recived(data))
  } catch (error) {
    dispatch(taskRequestFailed(error.message))
  }
}

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
