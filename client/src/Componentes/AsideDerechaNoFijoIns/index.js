import React, { useEffect } from 'react';
import './AsideDerechaNoFijoIns.css';

function AsideDerechaNoFijoIns({ children }) {

  return (
    <section className='EstiloSeccionLateralNoFijaIns'>
      {children}
    </section>
  );
}

export { AsideDerechaNoFijoIns };
