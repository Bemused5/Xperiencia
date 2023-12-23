import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {TodoMainPrincipal} from './TodomainPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserHome from '../../User/MisXperiencias/App';


function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<TodoMainPrincipal />} />
          <Route path="/MisXperiencias" element={<UserHome />} />

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
