import { createAction, createSlice } from '@reduxjs/toolkit'
import todosService from '../services/todos.service'

const initialState = []

// createSlice
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    recived(state, action) {
      return action.payload
    },
    update(state, action) {
      const elementIndex = state.findIndex(
        (el) => el.id === action.payload.id
      )
      state[elementIndex] = {
        ...state[elementIndex],
        ...action.payload,
      }
    },
    remove(state, action) {
      return state.filter(el => el.id !== action.payload.id)
    }
  }
})

const { actions, reducer: taskReducer } = taskSlice
const { update, remove, recived } = actions

const taskRequested = createAction('task/requested')
const taskRequestFailed = createAction('task/requestFailed')

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
