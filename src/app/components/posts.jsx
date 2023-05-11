import React from 'react'
import query from 'query-string'
import _ from 'lodash'
// components
import PostList from "./postList"
import Post from "./post"

const Posts = ({match, location}) => {
  const posts = [
    {id: 1, title: 'Post 1', label: 'It`s the post 1'},
    {id: 2, title: 'Post 2', label: 'It`s the post 2'},
    {id: 3, title: 'Post 3', label: 'It`s the post 3'}
  ]
  const postId = match.params.postId
  const getPostById = (postId) => {
    return posts.find( post => (post.id.toString() === postId))
  }

  const search = query.parse(location.search)

  const cropPosts = search.count
    ? _(posts).slice(0).take(search[Object.keys(search)]).value()
    : posts

  return <>{postId ? <Post post={getPostById(postId)}/> : <PostList posts={cropPosts}/>}</>
}
 
export default Posts