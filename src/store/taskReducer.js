import * as actionTypes from './actionTypes'

export function taskReducer(state = [], action) {
  switch (action.type) {
    case actionTypes.taskUpdated:{
      const newArray = [...state]
      const elementIndex = newArray.findIndex(
        (el) => el.id === action.payload.id
      )
      newArray[elementIndex] = {...newArray[elementIndex], ...action.payload}
      return newArray
    }
    case actionTypes.taskDeleted:{
      console.log('action:', action)
      const newArray = [...state].filter(task => task.id !== action.payload.id)
      return newArray
    }
    default:
      return state
  }
}
