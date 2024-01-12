import React from 'react'
import './TextoVacante.css';
var content
function TextoVacante({param}) {
    if(param===1){
        content=<h1 className='TextoVacante'>Junior Developer</h1>;
    }
    if(param===2){
        content=<h1 className='TextoVacante'>Agente de Marketing</h1>;
    }
    if(param===3){
      content=<h1 className='TextoVacante'>Senior Developer en Blockchain</h1>;
    }
    if(param===4){
      content=<h1 className='TextoVacante'>UX/UI Designer</h1>;
    }

    if(param===5){
      content=<h2 className='TextoVacanteUb'>Tiempo Completo</h2>;
    }
    if(param===6){
        content=<h2 className='TextoVacanteUb'>Medio Tiempo</h2>;
    }
    if(param===7){
      content=<h2 className='TextoVacanteUb'>Monterrey</h2>;
    }
    if(param===8){
      content=<h2 className='TextoVacanteUb'>San Luis Potosí</h2>;
    }
    if(param===9){
      content=<h2 className='TextoVacanteUb'>Ciudad de México</h2>;
    }
    if(param===10){
        content=<h2 className='TextoVacanteUb'>Cancún</h2>;
    }
  return (
    content
  )
}

export {TextoVacante} 