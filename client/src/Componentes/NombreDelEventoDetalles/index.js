import React from 'react'
import './NombreDelEventoDetalles.css';
var content
function NombreDelEventoDetalles({param}) {
    if(param===1){
        content=<h2 className='NombreDelEventoDetalles'>Galaxia del Conocimiento</h2>;
    }
    if(param===2){
        content=<h2 className='NombreDelEventoDetalles'>Carnaval de las Culturas</h2>;
    }
    if(param===3){
      content=<h2 className='NombreDelEventoDetalles'>Maratón de las Mentes Maestras</h2>;
    }

  return (
    content
  )
}

export {NombreDelEventoDetalles} 