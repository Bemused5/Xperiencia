import React from 'react'
import './Titulos.css';
var content
function Titulos({param}) {
    if(param===1){
        content=<h1 className='TituloPrincipal'>Bienvenido estudiante</h1>;
    }
    if(param===2){
        content=<h1 className='TituloPrincipal2'>MIS EXPERIENCIAS</h1>;
    }
    if(param===3){
      content=<h1 className='TituloPrincipal2'>Buscador de talento</h1>;
    }
    if(param===4){
      content=<h1 className='TituloLateralIzq'>Mis Vacantes</h1>;
    }
  return (
    content
  )
}

export {Titulos} 