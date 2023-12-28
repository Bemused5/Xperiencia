import React from 'react'
import './SectionCentrada.css';

function SectionCentrada({children}) {
  return (
    <section className='EstiloSeccionCentrada' >
      {children}
    </section>
  )
}

export {SectionCentrada}