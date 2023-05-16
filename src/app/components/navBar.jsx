import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return ( 
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/posts">Posts list</Link></li>
      <li><Link to="/posts?count=1">| Posts/count=1</Link></li>
      <li><Link to="/posts?count=2">| Posts/count=2</Link></li>
      <li><Link to="/posts?count=3">| Posts/count=3</Link></li>
      <li><Link to="/dashboard">Dashboard</Link></li>
      <li><Link to="/contacts">Contacts</Link></li>
    </ul>
   )
}
 
export default NavBar