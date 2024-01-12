import React, { useEffect } from 'react';
import './AsideDerecha.css';

function AsideDerecha({ children }) {
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
    <section className='EstiloSeccionLateral'>
      {children}
    </section>
  );
}

export { AsideDerecha };
