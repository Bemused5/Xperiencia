import React from 'react'
import './BotonCambioDePantalla.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function BotonCambioDePantalla({param}) {

  const navigate = useNavigate(); // Inicializa el hook
   // Esta función manejará el click en el botón
   const handleClick = () => {
    console.log('Botón clickeado');
    
    // Aquí es donde decides a qué ruta navegar basado en el parámetro
    if (param === 1) {
      navigate('/findexperiences'); // Navega a la ruta /UserHome
    }
    if (param === 2) {
      navigate('/MyXperiences'); // Navega a la ruta /UserHome
    }
    if (param === 4) {
      navigate('/profile'); // Navega a la ruta /UserHome
    }
    if (param === 5) {
      navigate('/MisXperiencias'); // Navega a la ruta /UserHome
    }
  };
  const content = {
    1: <p className='TextBotones'>Descubrir Xperiencias</p>,
    2: <p className='TextBotones'>Mis Xperiencias</p>,
    4: <p className='TextBotones'>Mi Perfil</p>,
    5: <p className='TextBotones'>Login</p>,
  }[param] || <p className='TextBotones'>Botón Default</p>; // Default si no se proporciona parámetro
  return (
    <div className='centeredContainer'>
        <button 
        onClick={handleClick}
        className='BotonSeleccion'>{content}</button>
    </div>
  )
}

export {BotonCambioDePantalla}