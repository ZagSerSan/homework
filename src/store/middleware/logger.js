export function logger(state) {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      // Do anything here: pass the action onwards with next(action),
      // or restart the pipeline with state.dispatch(action)
      // Can also use state.getState() here
      
      return next(action)
    }
  }
}