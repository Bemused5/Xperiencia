import React from 'react'
import './CounterActs.css'


function CounterActs({ total, completed }) {
  var message;
  if (completed === total && total !=0) {
    message = "Felicidades ya estás listo para tu viaje";
  } if(total===0){
    message = "Añade pendientes para prepararte para el viaje";
  }else {
    // Asegúrese de usar backticks para la plantilla literal
    message = `Has completado ${completed} de ${total} pendientes`;
  }

  return (
    <h1 className='TituloPrincipal2'>
      {message}
    </h1>
  );
}

export {CounterActs} 