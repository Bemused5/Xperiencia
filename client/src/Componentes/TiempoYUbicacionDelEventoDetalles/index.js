import React from 'react'
import './FechaDelEventoDetalles.css';
var content
function TiempoYUbicacionDelEventoDetalles({param}) {
    if(param===1){
        content=<p className='FechaDelEventoDetalles'>🕑 3 horas 📍Auditorio A</p>;
    }
    if(param===2){
        content=<p className='FechaDelEventoDetalles'>🕑 2 horas 📍Auditorio B</p>;
    }
    if(param===3){
      content=<p className='FechaDelEventoDetalles'>🕑 5 horas 📍Auditorio C</p>;
    }

  return (
    content
  )
}

export {TiempoYUbicacionDelEventoDetalles} 