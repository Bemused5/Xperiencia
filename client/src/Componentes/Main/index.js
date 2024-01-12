import React from 'react'
import './Main.css'

function Main({children}) {
  return (
    <div className='CenteredContainerMain'>
        {children}
    </div>
  )
}

export {Main}