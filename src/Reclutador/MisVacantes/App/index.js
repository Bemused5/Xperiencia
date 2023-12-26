import './App.css';
import { NavigationBar } from '../../../Componentes/NavigationBar';
import {Main} from '../../../Componentes/Main';
import {Titulos} from '../../../Componentes/Titulos';
import { SectionDerecha } from '../../../Componentes/SectionDerecha';
import { AsideIzquierda } from '../../../Componentes/AsideIzquierda';
import { Xperiencia } from '../../../Componentes/XPeriencia';
import { DivisionXperiencias } from '../../../Componentes/DivisionXperiencias';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import { BotonesPaginas } from '../../../Componentes/BotonesPaginas';
import { DivisionFlexHorizontal } from '../../../Componentes/DivisionFlexHorizontal';
import { DivisionDerecha } from '../../../Componentes/DivisionDerecha';
import { LogosEmpresas } from '../../../Componentes/LogosEmpresas';
import { TextoVacante } from '../../../Componentes/TextoVacante';
import { DivisionVacante } from '../../../Componentes/DivisionVacante';
import { DivisionFlexUbicacionYTiempo } from '../../../Componentes/DivisionFlexUbicacionYTiempo';
import { DivisionFlexVertical } from '../../../Componentes/DivisionFlexVertical';

function MisVacantes() {
  
  const navigate = useNavigate(); // Inicializa el hook
  // Esta función manejará el click en el botón
  const handleClick = (param) => { // Añade param como argumento de la función
    console.log('Botón clickeado', param);
    
    switch (param) {
      case 1:
        navigate('/MisVacantes');
        break;
      case 2:
        navigate('/PublicarVacante');
        break;
      default:
        console.log('No hay acción definida para este param');
    }
  };
  

  return (
    <>
        <NavigationBar/>
        <Main param={2}>
          <AsideIzquierda>
            <Titulos param={3}/>

            <DivisionVacante>
              <LogosEmpresas param={1}/>
              <DivisionFlexVertical>
                <TextoVacante param={1}/>
                <DivisionFlexUbicacionYTiempo>
                  <TextoVacante param={5}/>
                  <TextoVacante param={7}/>
                </DivisionFlexUbicacionYTiempo>
              </DivisionFlexVertical>
            </DivisionVacante>

            <DivisionVacante>
              <LogosEmpresas param={1}/>
              <DivisionFlexVertical>
                <TextoVacante param={1}/>
                <DivisionFlexUbicacionYTiempo>
                  <TextoVacante param={5}/>
                  <TextoVacante param={7}/>
                </DivisionFlexUbicacionYTiempo>
              </DivisionFlexVertical>
            </DivisionVacante>

          </AsideIzquierda>
          
          <SectionDerecha>
              <DivisionDerecha>
                <DivisionFlexHorizontal>
                  <Titulos param={4}/>
                  <BotonesPaginas param={5}/>
                </DivisionFlexHorizontal>
                
                <DivisionVacante>
                  <LogosEmpresas param={1}/>
                  <DivisionFlexVertical>
                    <TextoVacante param={1}/>
                    <DivisionFlexUbicacionYTiempo>
                      <TextoVacante param={5}/>
                      <TextoVacante param={7}/>
                    </DivisionFlexUbicacionYTiempo>
                  </DivisionFlexVertical>
                </DivisionVacante>

                <DivisionVacante>
                  <LogosEmpresas param={2}/>
                  <DivisionFlexVertical>
                    <TextoVacante param={2}/>
                    <DivisionFlexUbicacionYTiempo>
                      <TextoVacante param={6}/>
                      <TextoVacante param={8}/>
                    </DivisionFlexUbicacionYTiempo>
                  </DivisionFlexVertical>
                </DivisionVacante>

                <DivisionVacante>
                  <LogosEmpresas param={3}/>
                  <DivisionFlexVertical>
                    <TextoVacante param={3}/>
                    <DivisionFlexUbicacionYTiempo>
                      <TextoVacante param={5}/>
                      <TextoVacante param={9}/>
                    </DivisionFlexUbicacionYTiempo>
                  </DivisionFlexVertical>
                </DivisionVacante>

                <DivisionVacante>
                  <LogosEmpresas param={4}/>
                  <DivisionFlexVertical>
                    <TextoVacante param={4}/>
                    <DivisionFlexUbicacionYTiempo>
                      <TextoVacante param={6}/>
                      <TextoVacante param={10}/>
                    </DivisionFlexUbicacionYTiempo>
                  </DivisionFlexVertical>
                </DivisionVacante>

              </DivisionDerecha>
          </SectionDerecha>
          
        </Main>
    </>
  );
}

export default MisVacantes;
