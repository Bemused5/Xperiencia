import React from 'react';
// Importa los componentes necesarios
import { FormulariosLlenado } from '../../Componentes/FormulariosLlenado';
import { SubtitulosLogin } from '../../Componentes/Subtitulos/SubtitulosLogin';
import { Inputs } from '../../Componentes/Inputs';
import { Main } from '../../Componentes/Main';
import { Titulos } from '../../Componentes/Titulos';
import { CajaCentrada } from '../../Componentes/CajaCentrada';
import { BotonCambioDePantalla } from '../../Componentes/BotonCambioDePantalla';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import Slider from 'react-slick';
import { Xperiencia } from '../../Componentes/XPeriencia';
// Importa los estilos de react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CajaCentradaFlexVertical } from '../../Componentes/CajaCentradaFlexVertical';
import { XperienciaPreview } from '../../Componentes/XPerienciaPreview';
import TecDeMty from '../../Media/TECDeMTy.png'

function RecuperarPassword() {
  const navigate = useNavigate(); // Inicializa el hook

  // Configuración para el carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  // Manejador del click para el botón
  const handleClick = (param) => {
    console.log('Botón clickeado', param);
    
    switch (param) {
      case 1:
        navigate('/RecuperarPassword');
        break;
      default:
        console.log('No hay acción definida para este param');
    }
  };

  return (
    <>

      <Main>
        <CajaCentradaFlexVertical>
          {/* 
          <Slider {...settings}>
              <XperienciaPreview param={1}/>
              <XperienciaPreview param={2}/>
              <XperienciaPreview param={3}/>
              <XperienciaPreview param={4}/>
              <XperienciaPreview param={5}/>
              <XperienciaPreview param={6}/>

    
             
          </Slider>
          */}
          
          <CajaCentrada>
            {/* Carrusel de componentes aquí */}
            <FormulariosLlenado>
            <img src={TecDeMty} alt="Imagen de la escuela" className='EscuelaMain'/>
            </FormulariosLlenado>
            <Titulos param={5}/>

            <FormulariosLlenado>
              <SubtitulosLogin param={1}/>
              <Inputs/>
              <SubtitulosLogin param={2}/>
              <Inputs/>
              <BotonCambioDePantalla param={5}/>
              <a className='links-laterales' onClick={() => handleClick(1)}>¿Olvidaste la contraseña?</a>
            </FormulariosLlenado>
          </CajaCentrada>
        </CajaCentradaFlexVertical>
      </Main>
    </>
  );
}

export default RecuperarPassword ;
