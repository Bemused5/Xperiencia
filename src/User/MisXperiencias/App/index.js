import './App.css';
import { NavigationBar } from '../../../Componentes/NavigationBar';
import {Main} from '../../../Componentes/Main';
import {Titulos, TodoTittle} from '../../../Componentes/Titulos';
import { SectionIzquierdaXperiencias } from '../../../Componentes/SectionIzquierdaXperiencias';
import { AsideDerecha } from '../../../Componentes/AsideDerecha';
import { Xperiencia } from '../../../Componentes/XPeriencia';
import { DivisionXperiencias } from '../../../Componentes/DivisionXperiencias';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

function MisXperiencias() {
  
  const navigate = useNavigate(); // Inicializa el hook
  // Esta función manejará el click en el botón
  const handleClick = (param) => { // Añade param como argumento de la función
    console.log('Botón clickeado', param);
    
    switch (param) {
      case 1:
        navigate('/MisXperiencias');
        break;
      case 2:
        navigate('/MejorarMiPerfil');
        break;
      case 4:
        navigate('/Vacantes');
        break;
      case 5:
        navigate('/FuturasXperiencias');
        break;
      default:
        console.log('No hay acción definida para este param');
    }
  };
  

  return (
    <>
        <NavigationBar/>
        <Main param={2}>
          <SectionIzquierdaXperiencias>
            <Titulos param={2}/>
              <DivisionXperiencias>
                <Xperiencia param={1}/>
                <Xperiencia param={2}/>
                <Xperiencia param={3}/>
                <Xperiencia param={4}/>
                <Xperiencia param={5}/>
                <Xperiencia param={6}/>
                <Xperiencia param={7}/>
                <Xperiencia param={8}/>
                <Xperiencia param={9}/>
                <Xperiencia param={10}/>
                <Xperiencia param={11}/>
              </DivisionXperiencias>
          </SectionIzquierdaXperiencias>
          <AsideDerecha>
            <a className='links-laterales' onClick={() => handleClick(1)}>Mis Xperiencias</a>
            <a className='links-laterales' onClick={() => handleClick(2)}>Mejorar mi perfil</a>
            <a className='links-laterales' onClick={() => handleClick(4)}>Vacantes</a>
            <a className='links-laterales' onClick={() => handleClick(5)}>Futuras Xperiencias</a>
          </AsideDerecha>
        </Main>
    </>
  );
}

export default MisXperiencias;
