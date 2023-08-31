import React from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

const UserPage = () => {
  const params = useParams()
  const location = useLocation()
  const { userId } = params
      
  if (location.state && location.state.profile) {
    return (
      <>
        <Outlet/>
        <p>userId: {userId}</p>
      </>
    )
  }

  return (
    <div>
      <h1>User Page</h1>
      <Link to='profile' state={{userId, profile: true}}>user edit page</Link>
      <Link to='../'>users list</Link>
      <p>userId: {userId}</p>
    </div>
  )
}

export default UserPage
