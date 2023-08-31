import React from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'

const UserEditPage = () => {
  const params = useParams()
  const history = useHistory()
  const { userId, profile } = params

  if (profile !== 'profile') {
    history.replace(`/users/${userId}`)
  }

  const getId = () => {
    const rundomNum = Math.floor(Math.random() * 4) + 1
    let userIdNum = Number(userId)
    if (rundomNum === userIdNum) {
      if (userIdNum === 4) return rundomNum - 1
      if (userIdNum === 1) return rundomNum + 1
      return rundomNum + 1
    } else {
      return rundomNum
    }
  } 

  const anotherUserId = getId()

  return (
    <div>
      <h1>User Edit Page</h1>
      <Link to={`/users/${userId}`}>user page</Link>
      <Link to={`/users/${anotherUserId}`}>another user</Link>
      <Link to='/users'>users list</Link>
      <p>userId: {userId}</p>
    </div>
  )
}

export default UserEditPage