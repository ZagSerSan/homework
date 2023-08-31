import React from 'react'
import { Link } from 'react-router-dom'

const UsersListPage = () => {
  return (
    <div >
      <h1 >Users List Page</h1>
      <Link to='1' state={{ userId: '1' }}>user page 1</Link>
      <Link to='2' state={{ userId: '2' }}>user page 2</Link>
      <Link to='3' state={{ userId: '3' }}>user page 3</Link>
      <Link to='4' state={{ userId: '4' }}>user page 4</Link>
      <Link to='/'>home page</Link>
    </div>
  )
}

export default UsersListPage