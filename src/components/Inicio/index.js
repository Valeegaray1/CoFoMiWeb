import React from 'react';
import './inicio.css';
import imageSource from '../../assets/fondo1-2.jpg'; 
import ImgLogo from '../../../src/assets/logoblanco.png'


function Inicio() {
  return (
    <div className="inicio-container" id='inicio'>
      <div className='overlay3'>
      <div className="background-image-container">
        <img className="background-image" src={imageSource} alt="Imagen de fondo" />
      </div>
      <div className='inicio-title'>
        <h1>CO.FO.MI.</h1>
        <h2 className='inicio'>El rol del fonoaudiólogo cómo profesional de una disciplina de la salud es mejorar la comunicación de las personas, generando así una mejor calidad de vida.</h2>
<div className="centered-image">
          <img src={ImgLogo} className='img-logo'/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Inicio;
