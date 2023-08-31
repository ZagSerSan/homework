import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

const UserPage = () => {
  const params = useParams()
  const { userId } = params

  return (
    <div>
      <h1>User Page</h1>
      <Link to={`${userId}/profile`}>user edit page</Link>
      <Link to='/users'>users list</Link>
      <p>userId: {userId}</p>
    </div>
  )
}

export default UserPage
