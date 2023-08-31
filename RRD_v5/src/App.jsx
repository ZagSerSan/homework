import { Switch, Route, Redirect } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UsersListPage from './pages/UsersListPage'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <Route path='/users/:userId?/:profile?' component={UsersListPage}/>
      <Redirect to='/'/>
    </Switch>
  )
}

export default App
