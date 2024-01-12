import React from 'react'
import './DataUsuario.css';
var content
function DataUsuario({param}) {
    if(param===1){
        content=<p className='DataUsuario'>Patricio Valdez</p>;
    }
    if(param===2){
        content=<p className='DataUsuario'>Mauricio Salinas</p>;
    }
    if(param===3){
      content=<p className='DataUsuario'>Memo Alex</p>;
    }

    if(param===4){
      content=<p className='DataUsuario'>ISTI</p>;
    }
    if(param===5){
        content=<p className='DataUsuario'>ITI</p>;
    }
    if(param===6){
      content=<p className='DataUsuario'>ITMA</p>;
    }
    if(param===7){
      content=<p className='DataUsuario'>4°</p>;
    }
    if(param===8){
        content=<p className='DataUsuario'>6°</p>;
    }
    if(param===9){
      content=<p className='DataUsuario'>Propedeutico</p>;
    }
  return (
    content
  )
}

export {DataUsuario} 