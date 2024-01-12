import './Inputs.css';
import React, { useState } from 'react'; // Importa useState si no se ha hecho antes

function Inputs({ param, onInputChange }) {
  const [inputValue, setInputValue] = useState(''); // Define el estado para el valor del input

  const handleChange = (event) => {
    setInputValue(event.target.value); // Actualiza el estado del valor del input
    onInputChange(param, event.target.value); // Llama a la función de manejo de cambios
  };

  const placeholderText = param === 1 ? 'alumno@tec.com.mx' : param === 2 ? 'MyC0ntraseñ@Tec' : '';

  return (
    <input
      type={param === 1 ? 'email' : 'password'}
      placeholder={placeholderText}
      className='SearchTask2'
      value={inputValue}
      onChange={handleChange}
    />
  );
}

export { Inputs };

