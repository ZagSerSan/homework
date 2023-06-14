import React, { useState } from 'react'
import Card from '../common/Card'

const withFunctions = (Component) => ({ ...props }) => {
  const [isAuth, setIsAuth] = useState(false)
  // const isAuth = localStorage.getItem('isAuth')
  const onLogin = () => {
    localStorage.setItem('isAuth', true)
    setIsAuth(true)
  }
  const onLogOut = () => {
    localStorage.removeItem('isAuth')
    setIsAuth(false)
  }

  return (
    <Card>
      <Component {...{isAuth, onLogin, onLogOut}}/>
    </Card>
  )
}

export default withFunctions
