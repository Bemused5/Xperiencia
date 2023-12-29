import React, { useState,useEffect } from 'react';
import './NavigatioBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function NavigationBarPrincipal(){
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
         
        
        
      </nav>
    </header>
  );
};

 


export {NavigationBarPrincipal} ;
