import React from 'react'

function Inputs() {
  const [createValue, setCreateValue] = React.
  useState('');

  return (
    
    <input 
      placeholder="Hacer la maleta" 
      className='SearchTask2'
      value={createValue}
      onChange={(event)=>{
        setCreateValue(event.target.value)
    }}
    />
  )
}

export  {Inputs};