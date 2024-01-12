import React, { useEffect, useRef } from 'react';

function ProgressBarRequisitos({ target, current }) {
// Refs para las barras de progreso
const targetRef = useRef();
const currentRef = useRef();

useEffect(() => {
  // Asegurarse de que el porcentaje objetivo no sea mayor que 100
  const targetPercentage = Math.min(target, 100);
  // Asegurarse de que el porcentaje actual no sea mayor que el objetivo
  const currentPercentage = Math.min(current, targetPercentage);

  // Asignar el ancho a la barra objetivo
  if (targetRef.current) {
    targetRef.current.style.width = `${targetPercentage}%`;
  }
  // Asignar el ancho a la barra actual
  if (currentRef.current) {
    currentRef.current.style.width = `${currentPercentage}%`;
  }
}, [target, current]);

return (
  <div style={{
    width: '100%',
    backgroundColor: 'none',
    borderRadius: '20px',
    border: '1px solid gray',
    marginTop: '20px',
    position: 'relative', // Posicionamiento relativo para capas
  }}>
    {/* Barra que muestra el porcentaje objetivo */}
    <div ref={targetRef} style={{
      height: '30px',
      backgroundColor: '#414BB2',
      opacity: '0.5',
      borderRadius: '20px',
    }}></div>
    {/* Barra que muestra el porcentaje actual del usuario */}
    <div ref={currentRef} style={{
      height: '30px',
      backgroundColor: '#414BB2',

      borderRadius: '20px',
      position: 'absolute', // Posición absoluta para superponer
      top: '0', // Alineado a la parte superior del contenedor
      transition: 'width 1s ease-in-out',
    }}></div>
  </div>
);
}
export { ProgressBarRequisitos };
