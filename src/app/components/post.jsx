import React from 'react'

const Post = ({post}) => {
  
  return <h3>{post ? post.label : `Post is not found`}</h3>
}
 
export default Post