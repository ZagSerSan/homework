import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min"

// my components
import NavBar from "./components/navBar"
import Home from "./components/home"
import Dashboard from "./components/dashboard"
import Login from "./components/login"
// import Posts from "./components/posts"
import PostList from "./components/postList"
import Post from "./components/post"

const posts = [
  {id: 1, label: 'Post 1'},
  {id: 2, label: 'Post 2'},
  {id: 3, label: 'Post 3'}
]

function App() {
  return (
    <div>
      <NavBar/>
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId">
          { (props) => (<Post posts={posts} {...props}/>) }
        </Route>
        <Route path="/posts">
          { (props) => (<PostList posts={posts} {...props}/>) }
        </Route>
      </Switch>
    </div>
  )
}

export default App
