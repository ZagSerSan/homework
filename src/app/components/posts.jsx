import React from 'react'
import PostList from "./postList"
import Post from "./post"

const Posts = ({match}) => {
  const posts = [
    {id: 1, label: 'Post 1'},
    {id: 2, label: 'Post 2'},
    {id: 3, label: 'Post 3'}
  ]
  const postId = match.params.postId

  return <>{postId ? <Post {...{postId, posts}}/> : <PostList {...{posts}}/>}</>
}
 
export default Posts