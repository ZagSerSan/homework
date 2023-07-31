import { createAction, createReducer } from '@reduxjs/toolkit'

const initialState = [
  { id: 1, title: 'Task 1', completed: false },
  { id: 2, title: 'Task 2', completed: false },
]

// action - redux/toolkit
const update = createAction('task/updated')
const remove = createAction('task/remove')

export function taskCompleted(id) {
  return update({ id, completed: true })
}
export function titleChanged(id) {
  return update({ id, title: 'Changed..' })
}
export function taskDeleted(id) {
  return remove({ id })
}

// reducer
const taskReducer = createReducer(initialState, (builded) => {
  builded
    .addCase(update, (state, action) => {
      const elementIndex = state.findIndex(
        (el) => el.id === action.payload.id
      )
      state[elementIndex] = {
        ...state[elementIndex],
        ...action.payload,
      }
    })
    .addCase(remove, (state, action) => {
      return state.filter(el => el.id !== action.payload.id)
    })
})

export default taskReducer
