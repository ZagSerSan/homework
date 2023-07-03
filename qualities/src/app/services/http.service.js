import axios from 'axios'
import logger from './log.service'
import { toast } from 'react-toastify'
import config from '../config.json'

axios.defaults.baseURL = config.apiEndPoint

axios.interceptors.response.use((res) => res,
function(error) {
  // условие для отлавливания ожидаемой ошибки (см коды статусов http)
  const expectedErrors = 
  error.response &&
  error.response.status >= 400 &&
  error.response.status < 500
  if (!expectedErrors) {
    // Sentry
    logger.log(error)
    // неожидаемые ошибки
    // toast('Unexpected Errors')
    toast.error('Something was wrong. Try it later.')
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