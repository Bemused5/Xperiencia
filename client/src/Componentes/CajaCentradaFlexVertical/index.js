import React from 'react'
import { TodoTittle } from '../Titulos'
import './CajaCentradaFlexVertical.css';

function CajaCentradaFlexVertical({children}) {
  return (
    <section className='TodoCreateDivFlexVertical'>
      {children}
    </section>
  )
}

export {CajaCentradaFlexVertical}