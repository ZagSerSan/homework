import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: false },
]

// createSlice
const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
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
const { update, remove } = actions

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
