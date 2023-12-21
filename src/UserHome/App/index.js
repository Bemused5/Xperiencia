import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {Main} from '../../Componentes/Main';
import {Titulos, TodoTittle} from '../../Componentes/Titulos';
import {CajaCentrada} from '../../Componentes/CajaCentrada';
import { BotonCambioDePantalla, CreateTodoButton } from '../../Componentes/BotonCambioDePantalla';


function UserHome() {
  return (
    <>
        <NavigationBar/>
        <Main param={2}>
          <CajaCentrada>
            <Titulos param={2}/>
        
              <BotonCambioDePantalla param={1}/>
              <BotonCambioDePantalla param={2}/>
              <BotonCambioDePantalla param={4}/>
 
          </CajaCentrada>
        </Main>
    </>
  );
}

export default UserHome;
