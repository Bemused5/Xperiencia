import React from 'react'
import './FechaDelEvento.css';
var content
function FechaDelEvento({param}) {
    if(param===1){
        content=<p className='FechaDelEvento'>miercoles, 24 de enero</p>;
    }
    if(param===2){
        content=<p className='FechaDelEvento'>viernes, 9 de febrero</p>;
    }
    if(param===3){
      content=<p className='FechaDelEvento'>jueves, 29 de febrero</p>;
    }

  return (
    content
  )
}

export {FechaDelEvento} 