import React from 'react'
import './Titulos.css';
var content
function Titulos({param}) {
    if(param===1){
        content=<h1 className='TituloPrincipal'>Bienvenido estudiante</h1>;
    }
    if(param===2){
        content=<h1 className='TituloPrincipal2'>Aqui va a ir texto de cada mini seccion</h1>;
    }
  return (
    content
  )
}

export {Titulos} 