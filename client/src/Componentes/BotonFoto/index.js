import React from 'react'
import './BotonFoto.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function BotonFoto({param}) {

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
    1: <p className='TextBotonFoto'>Subir foto</p>,
  }[param] || <p className='TextBotonFoto'>Botón Default</p>; // Default si no se proporciona parámetro
  return (
    <div className='centeredContainerFoto'>
        <button 
        onClick={handleClick}
        className='BotonFoto'>{content}</button>
    </div>
  )
}

export {BotonFoto}