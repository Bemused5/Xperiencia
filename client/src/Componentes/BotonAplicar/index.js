import React from 'react'
import './BotonAplicar.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function BotonAplicar({param}) {

  const navigate = useNavigate(); // Inicializa el hook
   // Esta función manejará el click en el botón
   const handleClick = () => {
    console.log('Botón clickeado');
    
    // Aquí es donde decides a qué ruta navegar basado en el parámetro
    /*
    if (param === 5) {
      navigate('/FuturasXperiencias'); // Navega a la ruta /UserHome
    }
    if (param === 6) {
      navigate('/MisXperiencias'); // Navega a la ruta /UserHome
    }
    */
  };
  const content = {
    1: <p className='TextBotonAplicar'>Aplicar</p>,
  }[param] || <p className='TextBotonAplicar'>Botón Default</p>; // Default si no se proporciona parámetro
  return (
    <div className='centeredContainer'>
        <button 
        onClick={handleClick}
        className='BotonAplicar'>{content}</button>
    </div>
  )
}

export {BotonAplicar}