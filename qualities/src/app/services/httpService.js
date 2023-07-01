import axios from 'axios'
import * as Sentry from '@sentry/react'

axios.interceptors.response.use((res) => res,
function(error) {
  // условие для отлавливания ожидаемой ошибки (см коды статусов http)
  const expectedErrors = 
  error.response &&
  error.response.status >= 400 &&
  error.response.status < 500
  if (!expectedErrors) {
    // неожидаемые ошибки
    console.log('Unexpected Errors')
    // Sentry
    Sentry.captureException(error)
  }
  return Promise.reject(error)
})

const httpService = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
}

export default httpService