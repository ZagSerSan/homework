import React, { useRef } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'
import Divider from '../../common/divider'

const ProgrammableActionsExample = () => {
  const inputRef = useRef()

  const handleClick = () => {
    inputRef.current.focus()
  }
  const handleClickHeight = () => {
    inputRef.current.style.transition = 'all 0.2s linear'
    inputRef.current.style.padding = '0 10px'
    inputRef.current.style.height = inputRef.current.style.height === '0px' ? '38px' : '0px'
  }

  return (
    <CardWrapper>
      <SmallTitle className="card-title">Программируемые действия и свойства</SmallTitle>
      <Divider/>
      <label htmlFor="email" className='form-label'>Email: </label>
      <span>{' '}</span>
      <input ref={inputRef} type="email" id='email' className='form-control'/>
      <button className='btn btn-primary' onClick={handleClick}>focus</button>
      <button className='btn btn-primary' onClick={handleClickHeight}>handle height</button>
    </CardWrapper>
  )
}

export default ProgrammableActionsExample
