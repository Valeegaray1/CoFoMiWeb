import React, { useState } from 'react';
import './header.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [matricularseOpen, setMatricularseOpen] = useState(false);
  const [habilitacionOpen, setHabilitacionOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMatricularse = () => {
    setMatricularseOpen(!matricularseOpen);
  };

  const toggleHabilitacion = () => {
    setHabilitacionOpen(!habilitacionOpen);
  };

  const handleArancelesClick = () => {
    window.open('https://drive.google.com/file/d/1HaVPncWGRsFDpEwdTAleqwsdRv-zMEpq/view?usp=sharing', '_blank');
  };

  const instructivoMatriculacionClick = () => {
    window.open('https://drive.google.com/file/d/1V7PhNTs0m9TSpxa4eFEyH9q_ETs49d-p/view?usp=sharing', '_blank');
  };

  const reglamentoHabilitacionClick = () => {
    window.open('https://drive.google.com/file/d/1VPj4FgqNsmaoY1ehGb1r-N7oLUo1C1_g/view?usp=sharing', '_blank');
  };

  const solicitudHabilitacionClick = () => {
    window.open('https://drive.google.com/file/d/1ABOHs_Zrg2Y25VIP2cR0LBECpkN2IIuf/view?usp=sharing', '_blank');
  };

  const formularioMatriculacionClick = () => {
    window.open('https://drive.google.com/file/d/1fPe39byHGTFTnFyCYvHIf0lwBihPG_sy/view?usp=sharing', '_blank');
  };

  const handleMatricularseClick = () => {
    toggleMatricularse();
  };

  const handleHabilitacionClick = () => {
    toggleHabilitacion();
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
    <header className={`header2 ${menuOpen ? 'menu-open' : ''}`}>
      <div className="logo">Colegio de fonoaudiólogos Misiones</div>
      
      <div className="other-items">
        <div onClick={() => smoothScrollTo('inicio')}>Inicio</div>
        <div onClick={() => smoothScrollTo('institucional')}>Institucional</div>
        <div onClick={() => smoothScrollTo('profesionales')}>Profesionales</div>
        <div onClick={() => smoothScrollTo('contacto')}>Contacto</div>
      </div>
      <div className="menu-item" onClick={toggleMenu}>
        <div className='tramites'>Trámites</div>
        <ul className="menu-options">
          <li className="options" onClick={handleMatricularseClick}>
            Matriculacion
            {matricularseOpen && (
              <div className="sub-menu">
                <div className='subOpcion' onClick={instructivoMatriculacionClick}>Instructivo</div>
                <div className='subOpcion' onClick={formularioMatriculacionClick}>Formulario</div>
              </div>
            )}
          </li>
          <li className="options" onClick={handleHabilitacionClick}>
            Habilitación
            {habilitacionOpen && (
              <div className="sub-menu">
                <div className='subOpcion' onClick={reglamentoHabilitacionClick}>Reglamento</div>
                <div className='subOpcion' onClick={solicitudHabilitacionClick}>Solicitud</div>
              </div>
            )}
          </li>
          <li className="options" onClick={handleArancelesClick}>
            Aranceles
          </li>
        </ul>
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





