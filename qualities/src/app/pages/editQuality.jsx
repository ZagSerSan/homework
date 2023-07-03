import React, { useEffect, useState } from 'react'
import EditForm from '../components/ui/editForm'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import qualityService from '../services/quality.service'

const EditQualityPage = () => {
  const [quality, setQuality] = useState(null)
  const id = useParams().id
  const qualityEndPoint = `quality/${id}`

  const updateQuality = async (content) => {
    const data = qualityService.update(id, content)
    console.log('data :>> ', data);
    // try {
    //   const {data} = await httpService.put(qualityEndpoint, content)
    //   return data
    // } catch (error) {
    //   console.log('Expected Errors')
    // }
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
