import React from 'react';
import './XPeriencia.css'
import POAP from '../../Media/POAP.png'
import POAP2 from '../../Media/POAP2.png'
import POAP3 from '../../Media/POAP3.png'
import POAP4 from '../../Media/POAP4.gif'
import POAP5 from '../../Media/POAP5.png'
import POAP6 from '../../Media/POAP6.png'
import POAP7 from '../../Media/POAP7.png'
import POAP8 from '../../Media/POAP8.png'
import POAP9 from '../../Media/POAP9.png'
import POAP10 from '../../Media/POAP10.png'
import POAP11 from '../../Media/POAP11.png'

function XperienciaAmplia({ param }) {
  let url;
  switch (param) {
    case 1:
      url = POAP;
      break;
    case 2:
      url = POAP2;
      break;
    case 3:
      url = POAP3;
      break;
    case 4:
      url = POAP4;
      break;
    case 5:
        url = POAP5;
        break;
    case 6:
        url = POAP6;
        break;
    case 7:
        url = POAP7;
        break;
    case 8:
        url = POAP8;
        break;
    case 9:
        url = POAP9;
        break;
    case 10:
        url = POAP10;
        break;
    case 11:
        url = POAP11;
        break;

    default:
      url = ""; // Default image or leave empty
  }

  return (
    <img src={url} alt="Xperiencia" className='ImagenesXperienciaAmplia'/>
  );
}

export {XperienciaAmplia};
