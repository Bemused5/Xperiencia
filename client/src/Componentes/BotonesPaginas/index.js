import React from 'react'
import './BotonesPaginas.css';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function BotonesPaginas({param}) {

  const navigate = useNavigate(); // Inicializa el hook
   // Esta función manejará el click en el botón
   const handleClick = () => {
    console.log('Botón clickeado');
    
    // Aquí es donde decides a qué ruta navegar basado en el parámetro
    
    if (param === 5) {
      navigate('/FuturasXperiencias'); // Navega a la ruta /UserHome
    }
    if (param === 6) {
      navigate('/MisXperiencias'); // Navega a la ruta /UserHome
    }
  };
  const content = {
    5: <p className='TextBotones'>Ver todos</p>,
    6: <p className='TextBotones'>Ver todos</p>,
  }[param] || <p className='TextBotones'>Botón Default</p>; // Default si no se proporciona parámetro
  return (
    <div className='centeredContainer'>
        <button 
        onClick={handleClick}
        className='Botones'>{content}</button>
    </div>
  )
}

export {BotonesPaginas}