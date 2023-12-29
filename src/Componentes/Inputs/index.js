import React from 'react';
import './Inputs.css';

// Añade una prop 'type' para determinar el tipo de input
function Inputs({ param}) {
  // Inicializa el estado con diferentes valores según el tipo
  const [createValue, setCreateValue] = React.useState(
    param === 1 ? '' : param === 2 ? '' : ''
  );

  // Determina el placeholder según el tipo
  const placeholderText = param === 1 ? 'alumno@tec.com.mx' : param === 2 ? 'MyC0ntraseñ@Tec' : '';

  return (
    <input
      placeholder={placeholderText}
      className='SearchTask2'
      value={createValue}
      onChange={(event) => {
        setCreateValue(event.target.value);
      }}
    />
  );
}

export { Inputs };
