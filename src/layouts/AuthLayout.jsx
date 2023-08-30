import React from 'react'
// Librares
// import { useSelector } from "react-redux";
import { Navigate, Outlet } from 'react-router-dom'
// Components
import Card from '../components/Card'
import { useSelector } from 'react-redux'
import { isLoggedInSelector } from '../store/authSlice'
// Store
// import { isLoggedInSelector } from "../store/authSlice";

const AuthLayout = () => {
  const isLoggedIn = useSelector(isLoggedInSelector())

  if (isLoggedIn) {
    return <Navigate to="/" />
  }

  return (
    <div className="flex grow flex-col justify-center items-center  dark:text-slate-200 ">
      <Card>
        <Outlet />
      </Card>
    </div>
  )
}

export default AuthLayout
