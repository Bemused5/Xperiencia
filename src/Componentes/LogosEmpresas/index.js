import React from 'react';
import './Logos.css'
import BMWLogo from '../../Media/BMWLogo.png'
import Teslalogo from '../../Media/Teslalogo.png'
import MicrosoftLogo from '../../Media/MicrosoftLogo.png'
import AppleLogo from '../../Media/AppleLogo.png'


function LogosEmpresas({ param }) {
  let url;
  switch (param) {
    case 1:
      url = BMWLogo;
      break;
    case 2:
      url = Teslalogo;
      break;
    case 3:
      url = MicrosoftLogo;
      break;
    case 4:
      url = AppleLogo;
      break;
    default:
      url = ""; // Default image or leave empty
  }

  return (
    <img src={url} alt="Logo de la empresa" className='ImagenesLogos'/>
  );
}

export {LogosEmpresas};
