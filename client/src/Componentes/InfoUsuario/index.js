import React from 'react'
import './InfoUsuario.css';
var content
function InfoUsuario({param}) {
    if(param===1){
        content=<h2 className='InfoUsuario'>Estudiante:</h2>;
    }
    if(param===2){
        content=<h2 className='InfoUsuario'>Carrera:</h2>;
    }
    if(param===3){
        content=<h2 className='InfoUsuario'>Carrera:</h2>;
    }

  return (
    content
  )
}

export {InfoUsuario} 