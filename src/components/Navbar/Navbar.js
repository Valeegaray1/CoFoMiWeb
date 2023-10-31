import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";
import React, { useState } from 'react';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  const [showAboutMe, setShowAboutMe] = useState(false);
  const [showMatriculacion, setShowMatriculacion] = useState(false);
  const [showHabilitacion, setShowHabilitacion] = useState(false);

  const toggleAboutMe = () => {
    setShowAboutMe(!showAboutMe);
  };

  const toggleMatriculacion = () => {
    setShowMatriculacion(!showMatriculacion);
    setShowHabilitacion(false);
  };

  const toggleHabilitacion = () => {
    setShowHabilitacion(!showHabilitacion);
    setShowMatriculacion(false);
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
			<h3>Colegio de Fonoaudiólogos Misiones</h3>
			<nav ref={navRef}>
				<a onClick={() => smoothScrollTo('inicio')}>Inicio</a>
        <a  onClick={() => smoothScrollTo('institucional')}>Institucional</a>
        <a onClick={() => smoothScrollTo('profesionales')}>Profesionales</a>
		<a onClick={() => smoothScrollTo('contacto')}>Contacto</a>
        <a onClick={toggleAboutMe}>Trámites</a>
        {showAboutMe && (
          <ul>
            <li className="custom-list" onClick={toggleMatriculacion}>
              Matriculación  {showMatriculacion && (
                <ul className="custom-list">
                  <li ><a onClick={instructivoMatriculacionClick}>Instructivo</a></li>
                  <li ><a onClick={formularioMatriculacionClick}>Formulario</a></li>
                </ul>
              )}
            </li>
            <li className="custom-list" onClick={toggleHabilitacion}>
              Habilitación
              {showHabilitacion && (
                <ul className="custom-list">
                  <li ><a onClick={reglamentoHabilitacionClick}>Reglamento</a></li>
                  <li><a onClick={solicitudHabilitacionClick}>Solicitud</a></li>
                </ul>
              )}
            </li>
          </ul>
        )}
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;