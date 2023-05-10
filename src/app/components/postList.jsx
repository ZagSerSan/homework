import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PostList = ({posts}) => {
  return (<>
    {posts.map(post => 
      <h3 key={post.id}>
        {post.label} <Link to={`/posts/${post.id}`}>Читать</Link>
      </h3>)}
  </>)
}
 
export default PostList;