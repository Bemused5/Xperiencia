import React from 'react'
var content
function SubtitulosLogin({param}) {
    if(param==1){
        content=<h2 className='SubtituloPrincipal'>Ingresa tu correo escolar</h2>;
    }
    if(param==2){
        content=<h2 className='SubtituloPrincipal2'>ingresa tu contraseña</h2>;
    }
  return (
    content
  )
}

export {SubtitulosLogin} 