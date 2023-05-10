import React from 'react'
import PostList from "./postList"
import Post from "./post"

const Posts = ({match}) => {
  const posts = [
    {id: 1, title: 'Post 1', label: 'It`s the post 1'},
    {id: 2, title: 'Post 2', label: 'It`s the post 2'},
    {id: 3, title: 'Post 3', label: 'It`s the post 3'}
  ]
  const postId = match.params.postId
  const getPostById = (postId) => {
    return posts.find( post => (post.id.toString() === postId))
  }

  return <>{postId ? <Post post={getPostById(postId)}/> : <PostList {...{posts}}/>}</>
}
 
export default Posts