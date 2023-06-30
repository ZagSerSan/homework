import React, { useEffect, useState } from 'react'
import EditForm from '../components/ui/editForm'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import axios from 'axios'

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null)
  const id = useParams().id
  useEffect(async () => {
    const {data} = await axios.get(`http://localhost:4000/api/v1/quality/${id}`)
    setQuality(data.content)
  }, [])

  return (
    <>
      <h1>Edit Quality Page</h1> <EditForm data={quality}/>
    </>
  )
}

export default EditQualityPage
