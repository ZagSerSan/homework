import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const UserEditPage = () => {
  const location = useLocation()

  const getId = () => {
    let rundomNum = Math.floor(Math.random() * 4) + 1
    let userId = Number(location.state?.userId)

    if (rundomNum === userId) {
      if (userId === 4) return userId - 1
      if (userId === 1) return userId + 1
      return rundomNum + 1
    } else {
      return rundomNum
    }
  } 

  const anotherUserId = getId()

  return (
    <div>
      <h1>User Edit Page</h1>
      <Link to='../'>user page</Link>
      <Link to={`../../${anotherUserId}`} state={{ userId: anotherUserId, profile: false }}>another user</Link>
      <Link to='../../'>users list</Link>
      <p>userId: {location.state?.userId}</p>
    </div>
  )
}

export default UserEditPage