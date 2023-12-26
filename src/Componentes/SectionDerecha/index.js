import React from 'react'
import './SectionDerecha.css';

function SectionDerecha({children}) {
  return (
    <section className='EstiloSeccionDerecha' >
      {children}
    </section>
  )
}

export {SectionDerecha}