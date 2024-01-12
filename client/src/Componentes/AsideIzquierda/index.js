import React, { useEffect } from 'react';
import './AsideIzquierda.css';

function AsideIzquierda({ children }) {
  useEffect(() => {
    const handleScroll = () => {
      const topPosition = window.scrollY + 150; // Ajusta este valor según necesites
      document.documentElement.style.setProperty('--top-position', `${topPosition}px`);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className='EstiloSeccionLateralIzq'>
      {children}
    </section>
  );
}

export { AsideIzquierda };
