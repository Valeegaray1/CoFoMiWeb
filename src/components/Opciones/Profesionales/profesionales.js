import React from 'react';
import './profesionales.css';  // Importa el archivo CSS

const Profesionales = () => {
  const handleBuscarProfesionales = () => {
    window.open('https://drive.google.com/file/d/1nzNCxfYVzeJKlJ7B6yttXP2xVimXcPFz/view?usp=sharing', '_blank');
  };

  return (
    <div className="profesionales-container" id='profesionales'> {/* Aplica la clase CSS */}
      <div className="overlay"></div> {/* Capa de color transparente */}
      <div className="content">
        <h2 className='titulo'>Profesionales</h2>
       <div><p className='pProfesionales'></p></div>
        <button onClick={handleBuscarProfesionales} className='btn-texto'>Accede al listado de profesionales</button>
      </div>
    </div>
  );
};

export default Profesionales;

