import React from 'react';
import './Estudiantes.css'
import Mau from '../../Media/Mau.jpeg'
import Memo from '../../Media/Memo.jpeg'
import Pato from '../../Media/Pato.jpeg'


function ImgEstudiantes({ param }) {
  let url;
  switch (param) {
    case 1:
      url = Mau;
      break;
    case 2:
      url = Memo;
      break;
    case 3:
      url = Pato;
      break;

    default:
      url = ""; // Default image or leave empty
  }

  return (
    <img src={url} alt="Imagen del estudiante" className='ImagenesEstudiantes'/>
  );
}

export {ImgEstudiantes};
