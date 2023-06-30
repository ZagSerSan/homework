import React, { useEffect, useState } from 'react'
import EditForm from '../components/ui/editForm'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null)
  const id = useParams().id
  const qualityEndPoint = `http://localhost:4000/api/v1/quality/${id}`
  useEffect(async () => {
    const {data} = await axios.get(qualityEndPoint)
    setQuality(data.content)
  }, [])

  const handleSubmit = (form) => {
    axios.put(qualityEndPoint, form).then(respons => console.log(respons.data.content))
  }

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
