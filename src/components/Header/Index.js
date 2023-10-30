import React, { useState } from 'react';
import './header.css';
import menuIcon from '../../../src/assets/menu-regular.png';

function Header() {
  const [isTramitesOpen, setIsTramitesOpen] = useState(false);
  const [isMatriculacionOpen, setIsMatriculacionOpen] = useState(false);
  const [isHabilitacionOpen, setIsHabilitacionOpen] = useState(false);

  const toggleTramites = () => {
    setIsTramitesOpen(!isTramitesOpen);
  };

  const toggleMatriculacion = () => {
    setIsMatriculacionOpen(!isMatriculacionOpen);
  };

  const toggleHabilitacion = () => {
    setIsHabilitacionOpen(!isHabilitacionOpen);
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  

  return (
    <header>
      <div className='back'>
        <div className='menuContainer'>
          <a href='#' className='logo'>
            Colegio de Fonoaudiologos Misiones
          </a>
          <input type='checkbox' id='menu' />
          <label htmlFor='menu'>
            <img src={menuIcon} className='menu-icono' alt='Menu Icon' />
            <nav className='navbar'>
              <ul>
                <li onClick={() => smoothScrollTo('inicio')}>Inicio</li>
                <li onClick={() => smoothScrollTo('institucional')}>Institucional</li>
                <li onClick={() => smoothScrollTo('profesionales')}>Profesionales</li>
                <li onClick={() => smoothScrollTo('contacto')}>Contacto</li>
                <li className='tramitesOptions' onClick={toggleTramites}>Trámites</li>
                {isTramitesOpen && (
                  <ul>
                    <li className='tramitesOptions' onClick={toggleMatriculacion}>Matriculación</li>
                    {isMatriculacionOpen && (
                      <ul>
                        <li>Instructivo</li>
                        <li>Formulario</li>
                      </ul>
                    )}
                    <li className='tramitesOptions' onClick={toggleHabilitacion}>Habilitación</li>
                    {isHabilitacionOpen && (
                      <ul>
                        <li>Reglamento</li>
                        <li>Solicitud</li>
                      </ul>
                    )}
                  </ul>
                )}
              </ul>
            </nav>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;





/*import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleArancelesClick = () => {
    window.open('https://drive.google.com/file/d/1HaVPncWGRsFDpEwdTAleqwsdRv-zMEpq/view?usp=sharing', '_blank');
  };

  const handleMatricularseClick = () => {
    window.open('https://drive.google.com/file/d/1fPe39byHGTFTnFyCYvHIf0lwBihPG_sy/view?usp=sharing', '_blank');
  };

  const handleHabilitacionClick = () => {
    smoothScrollTo('habilitacion'); // Llama a la función para hacer scroll a 'habilitacion'
  };

  const smoothScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header2">
      <div className="logo">Logo</div>
      <div className="other-item" onClick={() => smoothScrollTo('inicio')}>
        Inicio
      </div>
      <div className="other-item" onClick={() => smoothScrollTo('institucional')}>
        Institucional
      </div>
      <div className="other-item" onClick={() => smoothScrollTo('profesionales')}>
        Profesionales
      </div>
      <div className="other-item" onClick={() => smoothScrollTo('contacto')}>
        Contacto
      </div>
      <div className="menu-item" onClick={toggleMenu}>
        Trámites
        {menuOpen && (
          <ul className="menu-options">
            <li className="options" onClick={handleMatricularseClick}>
              Matricularse
            </li>
            <li className="options" onClick={handleHabilitacionClick}>
              Habilitación
            </li>
            <li className="options" onClick={handleArancelesClick}>
              Aranceles
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}

export default Header;*/





