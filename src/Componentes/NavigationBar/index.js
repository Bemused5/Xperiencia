import React, { useState,useEffect } from 'react';
import './NavigatioBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavigationBar(){
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleNavToggle = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const navMenuClasses = isMenuVisible
    ? "nav-menu nav-menu_visible"
    : "nav-menu";

  const ariaLabel = isMenuVisible ? "Cerrar menú" : "Abrir menú";

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    
    // Clean up the event listener when the component unmounts
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (

    
    <header className="header">
      <nav className="nav">
        <a href="#" className="logo nav-link">
          <span className="X">X</span><span className="periencia">PERIENCIA</span>
        </a>
        <button className="nav-toggle" aria-label={ariaLabel} onClick={handleNavToggle}>
          <FontAwesomeIcon icon={faBars} />
        </button>
         
        <ul className={navMenuClasses}>
          {/*
          <li className="nav-menu-item">
              <Link to="/" className="nav-menu-link nav-link">DESCUBRIR</Link>
          </li>
          <li className="nav-menu-item">
            <Link to="/experiences" className="nav-menu-link nav-link">Mis Xperiencias</Link>
          </li>
          <li className="nav-menu-item">
              <Link to="/profile" className="nav-menu-link nav-link">MI PERFIL</Link>
          </li>
          */}
          <li className="nav-menu-item-user">
            <FontAwesomeIcon icon={faUser} />
          </li>
        </ul>
        
      </nav>
    </header>
  );
};

 


export {NavigationBar} ;
