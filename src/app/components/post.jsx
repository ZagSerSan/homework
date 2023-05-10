import React from 'react'

const Post = ({postId, posts}) => {
  const getPostById = (postId) => {
    return posts.find((post)=>(post.id.toString() === postId))
  }
  const post = getPostById(postId)

  return <h3>{post ? post.label : `post ${postId} is not found`}</h3>
}
 
export default Post