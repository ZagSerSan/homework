/* eslint-disable */
import React, { useEffect, useMemo, useState } from 'react'
import CardWrapper from '../../common/Card'
import SmallTitle from '../../common/typografy/smallTitle'

const factorial = (n) => {
  console.log('factorial')
  return n ? n * factorial(n - 1) : 1
}

const ComplexCalculateExample = () => {
  const [value, setValue] = useState(100)
  const [other, setOther] = useState(false);

  const fact = useMemo(()=>factorial(value), [value])
  const btnColor = other ? 'btn-primary' : 'btn-secondary'
  
  useEffect(()=> {
    console.log('btnColor')
  }, [btnColor])

  return (
    <>
      <CardWrapper>
        <SmallTitle>Кэширование сложных вычислений</SmallTitle>
        <p>Value: {value}</p>
        <p>Result fact: {fact}</p>
        <button className="btn btn-primary mx-2" onClick={()=>{setValue(value+10)}}>+</button>
        <button className="btn btn-primary mx-2" onClick={()=>{setValue(value-10)}}>-</button>
      </CardWrapper>
      <CardWrapper>
        <SmallTitle>Зависимость от сторонних setState</SmallTitle>
        <button className={"btn ms-md-2 " + btnColor} onClick={()=>{setOther(prev=>!prev)}}>change color</button>
      </CardWrapper>
    </>
  )
}

export default ComplexCalculateExample
