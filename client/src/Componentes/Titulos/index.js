import React from 'react'
import './Titulos.css';
var content
function Titulos({param}) {
    if(param===1){
        content=<h1 className='TituloPrincipal'>Bienvenido estudiante</h1>;
    }
    if(param===2){
        content=<h1 className='TituloPrincipal2'>Xperiencias recomendadas</h1>;
    }
    if(param===3){
      content=<h1 className='TituloPrincipal2'>Buscador de talento</h1>;
    }
    if(param===4){
      content=<h1 className='TituloLateralIzq'>Mis Vacantes</h1>;
    }
    if(param===5){
      content=<h1 className='TituloLateralIzq'>Bienvenido</h1>;
    }
    if(param===6){
      content=<h1 className='TituloPrincipal2'>Ingresa tu correo donde te mandaremos un correo para reestablecer la contraseña</h1>;
    }
    if(param===7){
      content=<h1 className='TituloPrincipal2'>Tus Xperiencias</h1>;
    }
  return (
    content
  )
}

export {Titulos} 