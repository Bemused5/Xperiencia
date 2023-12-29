import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {TodoMainPrincipal} from './TodomainPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MisXperiencias from '../../User/MisXperiencias/App';
import MisVacantes from '../../Reclutador/MisVacantes/App';
import RecuperarPassword from '../../RecuperarPassword/App';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TodoMainPrincipal />} />
          <Route path="/MisXperiencias" element={<MisXperiencias />} />
          <Route path="/MisVacantes" element={<MisVacantes />} />
          <Route path="/RecuperarPassword" element={<RecuperarPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
