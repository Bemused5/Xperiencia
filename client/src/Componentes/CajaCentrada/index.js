import React from 'react'
import { TodoTittle } from '../Titulos'
import './CajaCentrada.css';

function CajaCentrada({children}) {
  return (
    <section className='TodoCreateDiv'>
      {children}
    </section>
  )
}

export {CajaCentrada}