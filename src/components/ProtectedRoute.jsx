// import React from 'react'
// import { Navigate, useLocation } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { isLoggedInSelector } from '../store/authSlice'
// function ProtectedRoute({ element, redirectTo = '/auth/login' }) {
//   const isLoggedIn = useSelector(isLoggedInSelector())
//   const location = useLocation()

//   return isLoggedIn ? element : <Navigate to={redirectTo} state={{referrer: location}}/>
// }
// export default ProtectedRoute
