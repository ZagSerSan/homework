import React from 'react'

const Post = ({post, goToList}) => {
  
  return <>
    <h3>{post ? post.label : `Post is not found`}</h3>
    <button
      onClick={()=>goToList(post)}
      style={{cursor: 'pointer'}}
    >
      back to list
    </button>
  </>
}
 
export default Post