import React, { useState } from 'react'

function Busqueda({searchValue,setSearchValue}) {
 

  return (
    <div className='centeredContainer'>
    <input 
      placeholder="Imprimir pase de abordar" 
      className='SearchTask'
      value={searchValue}
      onChange={(event)=>{
        setSearchValue(event.target.value)
      }}
    />
    </div>
  )
}

export  {Busqueda};