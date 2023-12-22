import React from 'react'
import { TodoTittle } from '../Titulos'
import './AsideDerecha.css';

function AsideDerecha({children}) {
  return (
    <section className='EstiloSeccionLateral'>
      {children}
    </section>
  )
}

export {AsideDerecha}