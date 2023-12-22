import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {Main} from '../../Componentes/Main';
import {Titulos, TodoTittle} from '../../Componentes/Titulos';
import { BotonCambioDePantalla, } from '../../Componentes/BotonCambioDePantalla';
import { SectionIzquierdaXperiencias } from '../../Componentes/SectionIzquierdaXperiencias';
import { AsideDerecha } from '../../Componentes/AsideDerecha';
import { Xperiencia } from '../../Componentes/XPeriencia';
import { DivisionXperiencias } from '../../Componentes/DivisionXperiencias';

function UserHome() {
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
              <a>Mis Xperiencias</a>
              <a>Mejorar mi perfil</a>
              <a>Vacantes</a>
              <a>Futuras Xperiencias</a>
            </AsideDerecha>

        </Main>
    </>
  );
}

export default UserHome;
