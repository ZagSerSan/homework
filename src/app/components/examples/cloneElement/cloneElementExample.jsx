import React from 'react'
import CardWrapper from '../../common/Card'
import Divider from '../../common/divider'
import SmallTitle from '../../common/typografy/smallTitle'
import TextField from '../../common/form/textField'

const CloneElementExample = () => {
  const handleChange = (fieldData) => {
    console.log('fieldData :>> ', fieldData)
  }
  const field = <TextField name='email' label='email:'/>
  
  return (
    <CardWrapper>
      <SmallTitle>Пример</SmallTitle>
      <Divider/>
      {field}
      {React.cloneElement(field, { onChange: handleChange, label: 'cloned email:' })}
    </CardWrapper>
  )
}

export default CloneElementExample
