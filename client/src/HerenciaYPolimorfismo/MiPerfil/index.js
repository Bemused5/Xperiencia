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
import { InfoUsuario } from '../../Componentes/InfoUsuario';
import { DataUsuario } from '../../Componentes/DataUsuario';
import { FotoUsuario } from '../../Componentes/FotoUsuario';
import { DivisionFlexHorizontalUsuario } from '../../Componentes/DivisionFlexHorizontalUsuario';
import { DivisionFotoDerecha } from '../../Componentes/DivisionFotoDerecha';
import { BotonFoto } from '../../Componentes/BotonFoto';
import { AsideDerechaNoFijowBg } from '../../Componentes/AsideDerechaNoFijowBg';
import { AsideDerechaNoFijowBgPerfil } from '../../Componentes/AsideDerechaNoFijowBgPerfil';
import { SectionHabilidadesBlandas } from '../../Componentes/SectionHabilidadesBlandas';
function MiPerfil() {

  return (
    <>
        <Main >
        <NavigationBar/>
        <CajaCentradaFlexVertical>
            <DivisionFlexHorizontalUsuario>
                <DivisionIzquierda>
                    <DivisionFotoDerecha>
                        <FotoUsuario param={1}/>
                        <BotonFoto param={1}/>
                    </DivisionFotoDerecha>
                  
                    
                </DivisionIzquierda>
                <AsideDerechaNoFijowBgPerfil>
                <InfoUsuario param={1}/>
                    <DataUsuario param = {1}/>
                    <InfoUsuario param={2}/>
                    <DataUsuario param = {4}/>
                    <InfoUsuario param={3}/>
                    <DataUsuario param = {7}/>
                </AsideDerechaNoFijowBgPerfil>
                {/* Codigo comentado opcion 1 por si las dudas
                <AsideDerechaNoFijo>
                  <HabilidadesBlandas param={4}/>
                  <DivisionFlexVerticalAlignRight>
                    <HabilidadesBlandas param={1}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={2}/>
                    <ProgressBar completed={70} />
                    <HabilidadesBlandas param={3}/>
                    <ProgressBar completed={30} />
                    <HabilidadesBlandas param={5}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={6}/>
                    <ProgressBar completed={70} />
                    <HabilidadesBlandas param={7}/>
                    <ProgressBar completed={30} />
                    <HabilidadesBlandas param={8}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={9}/>
                    <ProgressBar completed={70} />
                  </DivisionFlexVerticalAlignRight>
                </AsideDerechaNoFijo>
                */}
            </DivisionFlexHorizontalUsuario>
            <CajaCentradaFlexVertical>
              <SectionHabilidadesBlandas>
              <HabilidadesBlandas param={4}/>
                  <DivisionFlexVerticalAlignRight>
                    <HabilidadesBlandas param={1}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={2}/>
                    <ProgressBar completed={70} />
                    <HabilidadesBlandas param={3}/>
                    <ProgressBar completed={30} />
                    <HabilidadesBlandas param={5}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={6}/>
                    <ProgressBar completed={70} />
                    <HabilidadesBlandas param={7}/>
                    <ProgressBar completed={30} />
                    <HabilidadesBlandas param={8}/>
                    <ProgressBar completed={50} />
                    <HabilidadesBlandas param={9}/>
                    <ProgressBar completed={70} />
                  </DivisionFlexVerticalAlignRight>
              </SectionHabilidadesBlandas>
            </CajaCentradaFlexVertical>



        </CajaCentradaFlexVertical>
        </Main>
    </>
  );
}

export default MiPerfil;
