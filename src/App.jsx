import './App.css'
import UserEditPage from './pages/UserEditPage'
import UserPage from './pages/UserPage'
import UsersListPage from './pages/UsersListPage'
import HomePage from './pages/homePage'

function App() {

  return (
    <>
      <HomePage/>
      <UsersListPage/>
      <UserPage/>
      <UserEditPage/>
    </>
  )
}

export default App
