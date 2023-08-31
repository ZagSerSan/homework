import React from 'react'
import { Link, useParams } from 'react-router-dom'
import UserPage from './UserPage'
import UserEditPage from './UserEditPage'

const UsersListPage = () => {
  const params = useParams()
  const { userId, profile } = params

  if (profile) {
    return <UserEditPage/>
  } else if (userId) {
    return <UserPage/>
  }

  return (
    <div >
      <h1 >Users List Page</h1>
      <Link to='users/1' state={{ userId: '1' }}>user page 1</Link>
      <Link to='users/2' state={{ userId: '2' }}>user page 2</Link>
      <Link to='users/3' state={{ userId: '3' }}>user page 3</Link>
      <Link to='users/4' state={{ userId: '4' }}>user page 4</Link>
      <Link to='/'>home page</Link>
    </div>
  )
}

export default UsersListPage