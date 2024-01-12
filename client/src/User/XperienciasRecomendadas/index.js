import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {Main} from '../../Componentes/Main';
import {Titulos, TodoTittle} from '../../Componentes/Titulos';
import { CajaCentradaFlexVertical } from '../../Componentes/CajaCentradaFlexVertical';
import { Xperiencia } from '../../Componentes/XPeriencia';
import { DivisionXperiencias } from '../../Componentes/DivisionXperiencias';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import { BoxXperiencia } from '../../Componentes/BoxXperiencia';
import { NombreDelEvento } from '../../Componentes/NombreDelEvento';
import { DivisionFlexHorizontal } from '../../Componentes/DivisionFlexHorizontal';
import { BotonesPaginas } from '../../Componentes/BotonesPaginas';
import { FechaDelEvento } from '../../Componentes/FechaDelEvento';
import { DivisionFlexVerticalAlignRight } from '../../Componentes/DivisionFlexVerticalAlignRight';
function XperienciasRecomendadas() {

  return (
    <>
        <Main >
        <NavigationBar/>
        <CajaCentradaFlexVertical>
            <DivisionFlexHorizontal>
                <Titulos param={2}/>
            </DivisionFlexHorizontal>

            <DivisionXperiencias>
                <BoxXperiencia>
                    <Xperiencia param={1}/>
                    <DivisionFlexVerticalAlignRight>
                        <NombreDelEvento param={1}/>
                        <FechaDelEvento param={1}/>
                    </DivisionFlexVerticalAlignRight>
                </BoxXperiencia>
                
                <BoxXperiencia>
                    <Xperiencia param={2}/>
                    <DivisionFlexVerticalAlignRight>
                        <NombreDelEvento param={2}/>
                        <FechaDelEvento param={2}/>   
                    </DivisionFlexVerticalAlignRight>
                </BoxXperiencia>
                
                <BoxXperiencia>
                    <Xperiencia param={3}/>
                    <DivisionFlexVerticalAlignRight>
                        <NombreDelEvento param={3}/>
                        <FechaDelEvento param={3}/>
                    </DivisionFlexVerticalAlignRight>
                    
                </BoxXperiencia>
            </DivisionXperiencias>


            {/*Segunda hilera de experiencias*/}


            <DivisionXperiencias>
                <BoxXperiencia>
                    <Xperiencia param={1}/>
                    <DivisionFlexVerticalAlignRight>
                        <NombreDelEvento param={1}/>
                        <FechaDelEvento param={1}/>
                    </DivisionFlexVerticalAlignRight>
                </BoxXperiencia>
                
                <BoxXperiencia>
                    <Xperiencia param={2}/>
                    <DivisionFlexVerticalAlignRight>
                        <NombreDelEvento param={2}/>
                        <FechaDelEvento param={2}/>   
                    </DivisionFlexVerticalAlignRight>
                </BoxXperiencia>
                
                <BoxXperiencia>
                    <Xperiencia param={3}/>
                    <DivisionFlexVerticalAlignRight>
                        <NombreDelEvento param={3}/>
                        <FechaDelEvento param={3}/>
                    </DivisionFlexVerticalAlignRight>
                    
                </BoxXperiencia>
            </DivisionXperiencias>

        </CajaCentradaFlexVertical>
        </Main>
    </>
  );
}

export default XperienciasRecomendadas;
