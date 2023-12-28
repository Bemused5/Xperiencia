import React from 'react'
import './Inputs.css'
function Inputs() {
  const [createValue, setCreateValue] = React.
  useState('');

  return (
    
    <input 
      placeholder="alumno@tec.com.mx" 
      className='SearchTask2'
      value={createValue}
      onChange={(event)=>{
        setCreateValue(event.target.value)
    }}
    />
  )
}

export  {Inputs};