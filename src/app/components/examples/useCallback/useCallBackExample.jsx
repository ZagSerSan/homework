import React, { useEffect, useRef, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const UseCallBackExample = () => {
  const [data, setData] = useState({})
  const withOutCallback = useRef(0)
  const withCallback = useRef(0)

  const handleChange = ({ target }) => {
    setData(prev => ({...prev, [target.name]: [target.value]}))
  }

  const validateWithOutCallback = (data) => {
    console.log('data', data.email)
  }
  useEffect(() => {
    validateWithOutCallback(data)
  }, [data]);
  useEffect(() => {
    withOutCallback.current++
  }, [validateWithOutCallback])

  return (
    <CardWrapper>
      <SmallTitle>Example</SmallTitle>
      <Divider />
      <p>Render withOutCallback: {withOutCallback.current}</p>
      <p>Render withCallback: {withCallback.current}</p>
      <label htmlFor="email" className='form-label'>Email: </label>
      <span>{' '}</span>
      <input
        name='email'
        type="email"
        className='form-control'
        value={data.email || ''}
        onChange={handleChange}  
      />

    </CardWrapper>
  )
}

export default UseCallBackExample
