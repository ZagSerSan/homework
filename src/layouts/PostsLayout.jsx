import React, { useEffect } from 'react'
// Librares
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
// Components
import BackgroundGradiend from '../components/BackgroundGradient'
import ScreenWidthWrapper from '../components/ScreenWidthWrapper'
//Store
import { getPosts } from '../store/postsSlice'

const PostsLayout = ({ children }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const loadPostData = () => {
      dispatch(getPosts())
    }
    loadPostData()
  }, [dispatch])

  return (
    <>
      <BackgroundGradiend />
      <ScreenWidthWrapper>
        <Outlet />
      </ScreenWidthWrapper>
    </>
  )
}

export default PostsLayout
