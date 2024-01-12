import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {Main} from '../../Componentes/Main';
import {Titulos, TodoTittle} from '../../Componentes/Titulos';
import { CajaCentradaFlexVertical } from '../../Componentes/CajaCentradaFlexVertical';
import { Xperiencia } from '../../Componentes/XPeriencia';
import { DivisionXperiencias } from '../../Componentes/DivisionXperiencias';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate
import { BoxXperiencia } from '../../Componentes/BoxXperiencia';
import { DivisionFlexHorizontal } from '../../Componentes/DivisionFlexHorizontal';
import { BotonesPaginas } from '../../Componentes/BotonesPaginas';
import { DivisionFlexVerticalAlignRight } from '../../Componentes/DivisionFlexVerticalAlignRight';
import { AsideDerecha } from '../../Componentes/AsideDerecha';
import { XperienciaAmplia } from '../../Componentes/XPerienciaAmplia';
import { AsideDerechaNoFijo } from '../../Componentes/AsideDerechaNoFijo';
import { DivisionIzquierda } from '../../Componentes/DivisionIzquierda';
import { NombreDelEventoDetalles } from '../../Componentes/NombreDelEventoDetalles';
import { FechaDelEventoDetalles } from '../../Componentes/FechaDelEventoDetalles';
import { TiempoYUbicacionDelEventoDetalles } from '../../Componentes/TiempoYUbicacionDelEventoDetalles';
import { InfoEventoDetalles } from '../../Componentes/InfoEventoDetalles';
import { DescripcionEventoDetalles } from '../../Componentes/DescripcionEventoDetalles';
import { HabilidadesBlandas } from '../../Componentes/HabilidadesBlandas';
import {ProgressBar} from '../../Componentes/ProgressBar';
function DetallesXperiencia() {

  return (
    <>
        <Main >
        <NavigationBar/>
        <CajaCentradaFlexVertical>
            <XperienciaAmplia param={1}/>
            <DivisionFlexHorizontal>
                <DivisionIzquierda>
                  <FechaDelEventoDetalles param={1}/>
                  <NombreDelEventoDetalles param={1}/>
                  <TiempoYUbicacionDelEventoDetalles param={1}/>
                  <InfoEventoDetalles param={1}/>
                  <DescripcionEventoDetalles param = {1}/>
                  <InfoEventoDetalles param={2}/>
                  <DescripcionEventoDetalles param = {4}/>
                </DivisionIzquierda>
                <AsideDerechaNoFijo>
                  <HabilidadesBlandas param={4}/>
                  <DivisionFlexVerticalAlignRight>
                    <HabilidadesBlandas param={1}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={2}/>
                    <ProgressBar completed={70} />
                    <HabilidadesBlandas param={3}/>
                    <ProgressBar completed={30} />
                  </DivisionFlexVerticalAlignRight>
                </AsideDerechaNoFijo>
            </DivisionFlexHorizontal>

            <DivisionXperiencias>

            </DivisionXperiencias>



        </CajaCentradaFlexVertical>
        </Main>
    </>
  );
}

export default DetallesXperiencia;
