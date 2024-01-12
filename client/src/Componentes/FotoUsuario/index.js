import React from 'react';
import './FotoUsuario.css'
import Pato from '../../Media/Pato.jpeg'
import Mau from '../../Media/Mau.jpeg'
import Memo from '../../Media/Memo.jpeg'

function FotoUsuario({ param }) {
  let url;
  switch (param) {
    case 1:
      url = Pato;
      break;
    case 2:
      url = Mau;
      break;
    case 3:
      url = Memo;
      break;

    default:
      url = ""; // Default image or leave empty
  }

  return (
    <img src={url} alt="Foto del usuario" className='ImagenUsuario'/>
  );
}

export {FotoUsuario};
