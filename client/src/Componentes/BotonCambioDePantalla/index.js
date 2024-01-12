import React from 'react'
import './BotonCambioDePantalla.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function BotonCambioDePantalla({param}) {

  const navigate = useNavigate(); // Inicializa el hook
   // Esta función manejará el click en el botón
   const handleClick = () => {
    console.log('Botón clickeado');
    
    // Aquí es donde decides a qué ruta navegar basado en el parámetro
    

  };
  const content = {
    5: <p className='TextBotonLogin'>Login</p>,
    6: <p className='TextBotonLogin'>Enviar</p>,
  }[param] || <p className='TextBotonLogin'>Botón Default</p>; // Default si no se proporciona parámetro
  return (
 
        <button 
        onClick={handleClick}
        className='BotonSeleccion'>{content}</button>
  )
}

export {BotonCambioDePantalla}