import React from 'react'
import './DivisionVacante.css'
function DivisionVacante({children}) {
  return (
    <section className='EstiloDivisionFlexVacante' >
      {children}
    </section>
  )
}

export {DivisionVacante}