import React, { useState } from 'react';
import './Actividades.css';
import imagenTaller1 from '../../../assets/taller1.jpg';
import imagenTaller2 from '../../../assets/taller2.jpg';
import imagenTaller3 from '../../../assets/taller3.jpg';
import imagenCapacitacion1 from '../../../assets/capacitacion1.jpg';
import imagenCapacitacion2 from '../../../assets/capacitacion2.jpg';
import imagenCapacitacion3 from '../../../assets/capacitacion3.jpg';
import eventoImagen1 from '../../../assets/eventoImagen1.jpg'

const Actividades = () => {
  const [descripcion, setDescripcion] = useState('');

  const talleres = [
    {
      id: 1,
      imagen: imagenTaller1,
      descripcion: 'Descripción del taller 1.',
    },
    {
      id: 2,
      imagen: imagenTaller2,
      descripcion: 'Descripción del taller 2.',
    },
    {
      id: 3,
      imagen: imagenTaller3,
      descripcion: 'Descripción del taller 3.',
    },
  ];

  const capacitaciones = [
    {
      id: 1,
      imagen: imagenCapacitacion1,
      descripcion: 'Descripción de la capacitación 1.',
    },
    {
      id: 2,
      imagen: imagenCapacitacion2,
      descripcion: 'Descripción de la capacitación 2.',
    },
    {
      id: 3,
      imagen: imagenCapacitacion3,
      descripcion: 'Descripción de la capacitación 3.',
    },
  ];

  const mostrarDescripcion = (descripcion) => {
    setDescripcion(descripcion);
  };

  return (
    <div id="actividades">
      <div className="section">
        <h2>Actividades</h2>
      </div>

      <div className="section">
        <h3>Talleres</h3>
        <div className="images-container">
          {talleres.map((taller) => (
            <div key={taller.id} className="image-item">
              <img
                src={taller.imagen}
                alt={`Taller ${taller.id}`}
                onClick={() => mostrarDescripcion(taller.descripcion)}
              />
              {descripcion === taller.descripcion && (
                <div className="descripcion">
                  {taller.descripcion}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="section">
        <h3>Capacitaciones</h3>
        <div className="images-container">
          {capacitaciones.map((capacitacion) => (
            <div key={capacitacion.id} className="image-item">
              <img
                src={capacitacion.imagen}
                alt={`Capacitación ${capacitacion.id}`}
                onClick={() => mostrarDescripcion(capacitacion.descripcion)}
              />
              {descripcion === capacitacion.descripcion && (
                <div className="descripcion">
                  {capacitacion.descripcion}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

 <div className="section">
        <h2>Eventos y noticias</h2>
      </div>

    <div className='contenedor-testimonio'>
       <img className='imagen-testimonio' 
        src={eventoImagen1}
        alt='Foto de Ian' />
      
      <div className='contenedor-texto-testimonio'>

         <p className='nombre-testimonio'>
          <strong>Nombre del evento</strong> </p>

        <p className='cargo-testimonio'>
          Se realizara en <strong>Posadas Misiones, el 15/08/2023</strong></p>

        <p className='texto-testimonio'>
          Únete a nuestro evento especial organizado por el colegio de fonoaudiólogos, donde celebraremos juntos el Día Internacional de la Comunicación. Esta jornada única estará llena de conferencias magistrales a cargo de expertos en el campo de la fonoaudiología</p>

        <a href=''>Inscribete aquí</a>
      </div>
    </div>
  <div className='contenedor-testimonio'>
       <img className='imagen-testimonio' 
        src={eventoImagen1}
        alt='Foto de Ian' />
      
      <div className='contenedor-texto-testimonio'>

         <p className='nombre-testimonio'>
          <strong>Nombre del evento</strong> </p>

        <p className='cargo-testimonio'>
          Se realizara en <strong>Posadas Misiones, el 15/08/2023</strong></p>

        <p className='texto-testimonio'>
          Únete a nuestro evento especial organizado por el colegio de fonoaudiólogos, donde celebraremos juntos el Día Internacional de la Comunicación. Esta jornada única estará llena de conferencias magistrales a cargo de expertos en el campo de la fonoaudiología</p>

        <a href=''>Inscribete aquí</a>
      </div>
    </div>
 

    </div>
  );
};

export default Actividades;
