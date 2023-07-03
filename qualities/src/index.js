import React from 'react'
import ReactDOM from 'react-dom'
// css
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
// components
import App from './app/App'
// vendors
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import logger from './app/services/log.service'
logger.init()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
