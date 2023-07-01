import React from 'react'
import ReactDOM from 'react-dom'
// css
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
// vendors
import * as Sentry from '@sentry/react'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
// components
import App from './app/App'

Sentry.init({
  dsn: 'https://d3d7497cdc3244b6bd4111f085029903@o4505453257621504.ingest.sentry.io/4505453270990848',
  integrations: [
    new Sentry.BrowserTracing({
      // Set `tracePropagationTargets` to control for which URLs distributed tracing should be enabled
      tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
    }),
    new Sentry.Replay(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

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
