import React from 'react'
import './NombreDelEvento.css';
var content
function NombreDelEvento({param}) {
    if(param===1){
        content=<h2 className='NombreDelEvento'>Galaxia del Conocimiento</h2>;
    }
    if(param===2){
        content=<h2 className='NombreDelEvento'>Carnaval de las Culturas</h2>;
    }
    if(param===3){
      content=<h2 className='NombreDelEvento'>Maratón de las Mentes Maestras</h2>;
    }

  return (
    content
  )
}

export {NombreDelEvento} 