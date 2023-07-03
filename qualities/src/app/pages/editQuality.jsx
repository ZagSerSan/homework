import React, { useEffect, useState } from 'react'
import EditForm from '../components/ui/editForm'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import qualityService from '../services/quality.service'

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null)
  const [errors, setErrors] = useState(null)
  const id = useParams().id

  const updateQuality = async (content) => {
    try {
      const data = qualityService.update(id, content)
      return data.content
    } catch (error) {
      console.log('catch')
      const {message, code} = error.response.data
      setErrors({message, code})
    }
  }

  const getQuality = async (id) => {
    try {
      const data = await qualityService.get(id)
      console.log('data :>> ', data);
      return data.content
    } catch (error) {
      // ожидаемые ошибки, то есть не входят в условие ожидаемых
      console.log('Expected Errors')
    }
  }

  const handleSubmit = async (data) => {
    updateQuality(data)
  }

  useEffect(() => {
    getQuality(id).then(data => setQuality(data))
    // getQuality(id).then(data => console.log('data :>> ', data))
  }, [])

  return (
    <>
    <h1>Edit Quality Page</h1>
    {quality !== null
    ? <EditForm data={quality} onSubmit={handleSubmit}/>
    : 'Loading...'
  }
    </>
  )
}

export default EditQualityPage
