import React, { useContext, useEffect, useState } from 'react'
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

  return <QualitiesContex.Provider value={ {qualities, isLoading} }>
    {!isLoading ? children : <h2>Qualities Loading ...</h2>}
    {children}
  </QualitiesContex.Provider>
}
