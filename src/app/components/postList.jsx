import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const PostList = ({posts}) => {
  return (<>
    {posts.map(post => 
      <h3 key={post.id}>
        {post.title} <Link to={`/posts/${post.id}`}>читать</Link>
      </h3>)}
  </>)
}
 
export default PostList;