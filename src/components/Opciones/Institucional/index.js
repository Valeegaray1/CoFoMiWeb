import React from 'react';
import './Institucional.css';
import imagen1 from '../../../assets/Institucional1.jpg';
import imagen2 from '../../../assets/Institucional2.jpg';
import imagen3 from '../../../assets/Institucional3.jpg';
import pdfFile from '../../../assets/Ley.pdf'; // Ruta relativa al PDF

const Institucional = () => {
  const handleDownloadPDF = () => {
    const pdfPath = process.env.PUBLIC_URL + pdfFile; // Ruta al PDF
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Ley'; // Puedes cambiar el nombre de descarga si lo deseas
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLeyClick = () => {
    window.open('https://drive.google.com/file/d/1MSKS28huw4OfFaIOIbWImehl2TAZ8HBj/view?usp=sharing', '_blank'); 
  };

   const handleEstatutoClick = () => {
    window.open('https://drive.google.com/file/d/1RHeJOjl4OSlNveSmukDajMFr-nfThT9U/view?usp=sharing', '_blank'); 
  };

  return (
    <div className="institucional-container" id='institucional'>
      

     {/*<div className="btn-container">
        <a className='btn1' target="_blank" href="https://drive.google.com/file/d/1MSKS28huw4OfFaIOIbWImehl2TAZ8HBj/view?usp=sharing">Ley</a>
        <a className='btn2' target="_blank" href="https://docplayer.es/14191423-Estatuto-del-colegio-de-fonoaudiologos-de-misiones.html">Estatuto</a>

  </div>*/}
      <p className='pOrg'>
Bienvenidos al sitio oficial del Colegio de Fonoaudiólogos de la Provincia de Misiones, creado en el año 2003 por Ley N° 4003, con Personería Jurídica N° A-2685, para el ejercicio de la profesión. Nuestra institución desempeña un papel fundamental en el ejercicio de la fonoaudiología, fijándose como uno de sus objetivos elevar los estándares de la práctica profesional.
      </p>
      <button className='btn-LE' onClick={handleLeyClick}><strong>Ley de creación</strong></button>
      <button className='btn-LE' onClick={handleEstatutoClick}><strong>Estatuto</strong></button>

     {/*<div className="image-container">
        <img src={imagen1} alt="Imagen 1" className="zoom-image" />
        <img src={imagen2} alt="Imagen 2" className="zoom-image" />
        <img src={imagen3} alt="Imagen 3" className="zoom-image" />
  </div>*/}


      
    </div>
  );
};

export default Institucional;
