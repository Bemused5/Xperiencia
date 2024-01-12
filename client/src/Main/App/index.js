import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {TodoMainPrincipal} from './TodomainPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MisXperiencias from '../../User/MisXperiencias/';
import MisVacantes from '../../Reclutador/MisVacantes/App';
import RecuperarPassword from '../../RecuperarPassword/App';
import UserMain from '../../User/UserMain';
import DetallesXperiencia from '../../User/DetallesXperiencia';
import MiPerfil from '../../HerenciaYPolimorfismo/MiPerfil';
import Inscribir from '../../User/Inscribir';
import InscribirRequisitos from '../../User/InscribirRequisitos';
import XperienciasRecomendadas from '../../User/XperienciasRecomendadas';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TodoMainPrincipal />} />
          <Route path="/MisXperiencias" element={<MisXperiencias />} />
          <Route path="/MisVacantes" element={<MisVacantes />} />
          <Route path="/RecuperarPassword" element={<RecuperarPassword />} />
          <Route path='/UserMain' element={<UserMain/>}/>
          <Route path='/DetallesXperiencia' element={<DetallesXperiencia/>}/>
          <Route path='/MiPerfil' element={<MiPerfil/>}/>
          <Route path='/Inscribir' element={<Inscribir/>}/>
          <Route path='/InscribirRequisitos' element={<InscribirRequisitos/>}/>
          <Route path='XperienciasRecomendadas' element={<XperienciasRecomendadas/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
