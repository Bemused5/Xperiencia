import './App.css';
import { NavigationBar } from '../../Componentes/NavigationBar';
import {TodoMainPrincipal} from './TodomainPrincipal';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserHome from '../../UserHome/App';


function App() {
  return (
    <>
      <Router>
        <NavigationBar/>
        <Routes>
          <Route path="/" element={<TodoMainPrincipal />} />
          <Route path="/UserHome" element={<UserHome />} />

        </Routes>
        
      </Router>
    </>
  );
}

export default App;
