import React, { useEffect } from 'react';
import './AsideDerechaNoFijo.css';

function AsideDerechaNoFijo({ children }) {

  return (
    <section className='EstiloSeccionLateralNoFija'>
      {children}
    </section>
  );
}

export { AsideDerechaNoFijo };
