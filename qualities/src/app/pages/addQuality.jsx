import React from 'react'
import QualityForm from '../components/ui/qualityForm'
import { useQualities } from '../hooks/useQualities'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'

const AddQualityPage = () => {
  const history = useHistory()
  const { addQuality } = useQualities()

  const handleSubmit = (data) => {
    addQuality(data).then(data => data ? history.push('/') : console.log(data))
  }
  
  return (
    <>
      <h1>Add Quality</h1>
      <QualityForm onSubmit={handleSubmit}/>
    </>
  )
}

export default AddQualityPage
