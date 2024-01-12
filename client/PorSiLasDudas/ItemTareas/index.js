import React from 'react'
import deleteImg from '../media/Delete.png'

function ItemTareas(props){
    return (
      <li>
        <div className='TodoItem'>
          <div className='TodoItemCheckandText'>
            {/*<span className='Icon Icon-check Icon-check--active'>V</span>*/}
            <img src={props.completed ? maletaCerrada : maletaAbierta} className="Icon-check" onClick={props.onComplete}></img>
            <p  className={`TodoItem-p ${props.completed && "TodoItem-p--active"}`}>{props.text}</p>
          </div>
          <div  className='TodoItemDelete'>
            <img src={deleteImg} className='Icon-delete' onClick={props.onDelete}></img>
          </div>
        </div>
      </li>
      
    );
  }

export {ItemTareas}