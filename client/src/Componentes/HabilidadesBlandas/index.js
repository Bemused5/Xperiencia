import React from 'react'
import './HabilidadesBlandas.css';
var content
function HabilidadesBlandas({param}) {
    if(param===1){
        content=<h2 className='HabilidadesBlandas'>Liderazgo</h2>;
    }
    if(param===2){
        content=<h2 className='HabilidadesBlandas'>Trabajo en equipo</h2>;
    }
    if(param===3){
      content=<h2 className='HabilidadesBlandas'>Hablar en público</h2>;
    }
    if(param===4){
      content=<h2 className='HabilidadesBlandasTitulo'>Mi Xperiencia </h2>;
    }

    if(param===5){
      content=<h2 className='HabilidadesBlandas'>Solución de problemas</h2>;
    }
    if(param===6){
        content=<h2 className='HabilidadesBlandas'>Inglés</h2>;
    }
    if(param===7){
      content=<h2 className='HabilidadesBlandas'>Innovación</h2>;
    }
    if(param===8){
      content=<h2 className='HabilidadesBlandas'>Proactividad</h2>;
    }
    if(param===9){
      content=<h2 className='HabilidadesBlandas'>Creatividad</h2>;
    }
  return (
    content
  )
}

export {HabilidadesBlandas} 