import React from 'react'
import './InfoEventoDetalles.css';
var content
function InfoEventoDetalles({param}) {
    if(param===1){
        content=<h2 className='InfoDelEventoDetalles'>Nombre del evento</h2>;
    }
    if(param===2){
        content=<h2 className='InfoDelEventoDetalles'>Publico objetivo</h2>;
    }


  return (
    content
  )
}

export {InfoEventoDetalles} 