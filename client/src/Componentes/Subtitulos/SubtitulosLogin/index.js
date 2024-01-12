import React from 'react' 
import './SubtitulosLogin.css'

var content
function SubtitulosLogin({param}) {
    if(param==1){
        content=<h2 className='SubtituloPrincipal'>email</h2>;
    }
    if(param==2){
        content=<h2 className='SubtituloPrincipal2'>password</h2>;
    }
  return (
    content
  )
}

export {SubtitulosLogin} 