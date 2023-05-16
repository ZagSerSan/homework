import React from 'react'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import query from 'query-string'
import _ from 'lodash'
// components
import PostList from "./postList"
import Post from "./post"

const Posts = ({match, location}) => {
  const history = useHistory()
  const params = useParams()
  const posts = [
    {id: 1, title: 'Post 1', label: 'It`s the post 1'},
    {id: 2, title: 'Post 2', label: 'It`s the post 2'},
    {id: 3, title: 'Post 3', label: 'It`s the post 3'}
  ]
  const {postId} = params
  const getPostById = (postId) => {
    return posts.find( post => (post.id.toString() === postId))
  }

  const search = query.parse(location.search)

  const cropPosts = search.count
    ? _(posts).slice(0).take(search[Object.keys(search)]).value()
    : posts
  
  // Создаём функцию для перехода к списку постов
  const goToList = (hasPost) => {
      // Вызываем метод истории
      hasPost ? history.push("/posts") : history.replace("/posts")
  }

  return (
    <>
      {postId
        ? <Post post={getPostById(postId)} goToList={goToList}/>
        : <PostList posts={cropPosts}/>
      }
    </>
  )
}
 
export default Posts
