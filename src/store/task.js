import { createAction } from '@reduxjs/toolkit'

// actionTypes redux/toolkit
const update = createAction('task/updated')
const remove = createAction('task/remove')

// actionTypes
// const TASK_UPDATED = 'task/updated'
// const TASK_DELETED = 'task/deleted'

// actions
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
function taskReducer(state = [], action) {
  switch (action.type) {
    case update.type: {
      const newArray = [...state]
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      )
      newArray[elementIndex] = {
        ...newArray[elementIndex],
        ...action.payload,
      }
      return newArray
    }
    case remove.type: 
      return state.filter(el => el.id !== action.payload.id)
    default:
      return state
  }
}
export default taskReducer
