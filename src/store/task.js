import { createSlice } from '@reduxjs/toolkit'
import todosService from '../services/todos.service'

const initialState = []

// createSlice
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    //! не срабатывает тут
    set(state, action) {
      console.log(action.payload)
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
const { update, remove, set } = actions

export const getTasks = () => async (dispatch) => {
  try {
    const data = await todosService.fetch()
    console.log(data)
    //! не срабатывает тут
    dispatch(set(data))
  } catch (error) {
    
  }
}

export const completedTask = (id) => (getState, dispatch) => {
  dispatch(update({ id, completed: true }))
}
// посредством каррирования
export function titleChanged(id) {
  return function(getState, dispatch) {
    dispatch(update({ id, title: 'Changed..' }))
  }
}
export function taskDeleted(id) {
  return function(getState, dispatch) {
    dispatch(remove({ id }))
  }
}

export default taskReducer
