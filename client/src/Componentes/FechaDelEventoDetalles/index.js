import React from 'react'
import './FechaDelEventoDetalles.css';
var content
function FechaDelEventoDetalles({param}) {
    if(param===1){
        content=<p className='FechaDelEventoDetalles'>Miercoles, 24 de enero</p>;
    }
    if(param===2){
        content=<p className='FechaDelEventoDetalles'>Viernes, 9 de febrero</p>;
    }
    if(param===3){
      content=<p className='FechaDelEventoDetalles'>Jueves, 29 de febrero</p>;
    }

  return (
    content
  )
}

export {FechaDelEventoDetalles} 