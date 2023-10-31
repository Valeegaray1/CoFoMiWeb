import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Organizacion from './components/Opciones/Organizacion'; 
import Institucional from './components/Opciones/Institucional/index.js';
import Inicio from './components/Inicio/';
import { animateScroll as scroll } from 'react-scroll';
import Footer from './components/Footer';
import Aranceles from './components/Opciones/Aranceles/aranceles';
import Profesionales from './components/Opciones/Profesionales/profesionales';
import Contacto from './components/Contacto';
import Navbar from './components/Navbar/Navbar';


import './App.css';

function App() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Inicio />
        
        <Institucional id="institucional" />
      
        <Organizacion />
        <Profesionales />
        <Aranceles />
        <Contacto />
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;

