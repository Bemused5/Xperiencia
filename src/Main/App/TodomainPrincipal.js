import React from 'react'
import { FormulariosLlenado, TodoForm } from '../../Componentes/FormulariosLlenado';
import {SubtitulosLogin, TodoSubtittle} from '../../Componentes/Subtitulos/SubtitulosLogin';
import {Inputs, TodoPendienteText} from '../../Componentes/Inputs';
import {Main} from '../../Componentes/Main';
import {Titulos} from '../../Componentes/Titulos';
import {CajaCentrada} from '../../Componentes/CajaCentrada';
import { BotonCambioDePantalla, CreateTodoButton } from '../../Componentes/BotonCambioDePantalla';

function TodoMainPrincipal() {
  return (
    <>
    <Titulos param={1}/>
        <Main>
          <CajaCentrada>
            <Titulos param={3}/>
            <FormulariosLlenado>
              <SubtitulosLogin param={1}/>
              <Inputs/>
              <SubtitulosLogin param={2}/>
              <Inputs/>
              <BotonCambioDePantalla  param={5}/>
            </FormulariosLlenado>
          </CajaCentrada>
        </Main>
    </>
  )
}

export {TodoMainPrincipal}