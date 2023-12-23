import React from 'react'
import './StickyParent.css'
function StickyParent({children}) {
  return (
    <div className='sticky-parent'>
        {children}
    </div>
  )
}

export {StickyParent}