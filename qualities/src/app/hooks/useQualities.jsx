import React, { useContext, useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'
import qualityService from '../services/quality.service'

const QualitiesContex = React.createContext()

export const useQualities = () => {
  return useContext(QualitiesContex)
}

export const QualitiesProvider = ({children}) => {
  const [qualities, setQualities] = useState([])
  const [error, setError] = useState(null)
  const [isLoading, setLoading] = useState(true)
  const prevState = useRef()

  useEffect(async () => {
    const getQualities = async () => {
      try {
        const {content} = await qualityService.fetchAll()
        setQualities(content)
        setLoading(false)
      } catch (error) {
        const {message} = error.response.data
        setError(message)
        toast.error(message)
      }
    }
    getQualities()
  }, [])
  const getQuality = (id) => {
    return qualities.find(q => q._id === id)
  }
  const updateQuality = async ({_id: id, ...data}) => {
    try {
      const {content} = await qualityService.update(id, data)
      setQualities(prevState => prevState.map(item => {
        if (item._id === content._id) {
          return content
        } else {
          return item
        }
      }))
      return content
    } catch (error) {
      const {message} = error.response.data
      setError(message)
      toast.error(message)
    }
  }
  const addQuality = async (data) => {
    try {
      const {content} = await qualityService.create(data)
      setQualities(prevState => [...prevState, content])
      return content
    } catch (error) {
      const {message} = error.response.data
      setError(message)
      toast.error(message)
    }
  }
  const deleteQuality = async (id) => {
    prevState.current = qualities
    setQualities(prevState => {
      return prevState.filter(item => item._id !== id)
    })
    try {
      await qualityService.delete(id)
      // return content
    } catch (error) {
      const {message} = error.response.data
      setError(message)
      // оптимистическое удаление (возврат состояние при ошибке)
      setQualities(prevState.current)
      // alert
      toast.error(message)
    }
  }

  return <QualitiesContex.Provider value={{ qualities, isLoading, getQuality, updateQuality, addQuality, deleteQuality }}>
    {!isLoading ? children : <h2>Qualities Loading ...</h2>}
  </QualitiesContex.Provider>
}
