import React from 'react'
import { useHistory } from 'react-router-dom'

const Post = ({post}) => {
  
  const history = useHistory()
  // Создаём функцию для перехода к списку постов
  const goToList = (hasPost) => {
    // Вызываем метод истории
    hasPost ? history.push("/posts") : history.replace("/posts")
  }

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