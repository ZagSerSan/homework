import { Navigate } from 'react-router-dom'
import UserEditPage from './pages/UserEditPage'
import UserPage from './pages/UserPage'
import UsersListPage from './pages/UsersListPage'
import HomePage from './pages/homePage'

const routes = [
  {path: "/", element: <HomePage/>},
  {
    path: "users",
    children: [
      {path: "", element: <UsersListPage/>},
      {
        path: ":userId",
        children: [
          {path: "", element: <UserPage/>},
          {path: "profile", element: <UserEditPage/>},
          {path: "*", element: <Navigate to='/users'/>}
        ]
      },
    ]
  },
  {path: "*", element: <Navigate to='/'/>}
]

export default routes
