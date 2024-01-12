import React, { useState } from 'react'; // Importa useState
import axios from 'axios'; // Importa axios
// Importa los componentes necesarios
import { FormulariosLlenado } from '../../Componentes/FormulariosLlenado';
import { SubtitulosLogin } from '../../Componentes/Subtitulos/SubtitulosLogin';
import { Inputs } from '../../Componentes/Inputs';
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
import { Main } from '../../Componentes/Main';
import { NavigationBarPrincipal } from '../../Componentes/NavigationBarPrincipal';


function TodoMainPrincipal() {
  const navigate = useNavigate(); // Inicializa el hook
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError] = useState(false)
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
  const handleInputChange = (param, value) => {
    if (param === 1) {
      setEmail(value);
    } else if (param === 2) {
      setPassword(value);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', { email, password });
      const userType = response.data.userType1;

      switch(userType) {
        case '3':
          navigate('/MisVacantes');
          break;
        // Agrega casos para otros userType
        default:
          // Manejar casos no esperados o mostrar un error
      }
    } catch (error) {
      // Manejar error de login
    }
  };

  return (
    <>

      <Main>
        <NavigationBarPrincipal/>
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
              <Inputs param={1}/>
              <SubtitulosLogin param={2}/>
              <Inputs param={2}/>
              <BotonCambioDePantalla  param={5}/>
              <a className='links-laterales' onClick={() => handleClick(1)}>¿Olvidaste la contraseña?</a>
            </FormulariosLlenado>
          </CajaCentrada>
        </CajaCentradaFlexVertical>
      </Main>
    </>
  );
}

export { TodoMainPrincipal };
