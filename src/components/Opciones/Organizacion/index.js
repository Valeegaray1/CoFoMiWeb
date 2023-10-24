import React from 'react';
import './Organizacion.css';

const comisiones = [
  {
    title: 'Comisión Directiva',
    descripcion: 'Asegurar la excelencia en la práctica de la fonoaudiología, así como garantizar la prestación de servicios de alta calidad a la sociedad.',
    presidente: { nombre: 'Analia Pereira', cargo: 'Presidente' },
    vicepresidente: { nombre: 'Ana Laura Brown', cargo: 'Vicepresidente' },
    secretaria: { nombre: 'Silvia Cesari', cargo: 'Secretaria' },
    tesorera: { nombre: 'Vanesa Manzi', cargo: 'Tesorera' },
    vocalTitular: [
      { nombre: 'Alicia Orfilia', cargo: 'Vocal titular 1°' },
      { nombre: 'Alicia Amarilla', cargo: 'Vocal titular 2°' },
    ],
    vocalSuplente: [
      { nombre: 'Graciela Guerrero Kruk', cargo: 'Vocal suplente 1°' },
      { nombre: 'Liliana Da Silva', cargo: 'Vocal suplente 2°' },
    ],
    personas: [
      { nombre: 'Ana Laura Brown', cargo: 'Vicepresidente' },
      { nombre: 'Silvia Cesari', cargo: 'Secretaria' },
      { nombre: 'Vanesa Manzi', cargo: 'Tesorera' },
      { nombre: 'Alicia Orfilia', cargo: 'Vocal titular 1°' },
      { nombre: 'Alicia Amarilla', cargo: 'Vocal titular 2°' },
      { nombre: 'Graciela Guerrero Kruk', cargo: 'Vocal suplente 1°' },
      { nombre: 'Liliana Da Silva', cargo: 'Vocal suplente 2°' },
    ],
  },
  {
    title2: 'Comisión Revisora de cuentas',
    descripcion2: 'Garantizar la transparencia, la legalidad y la eficiencia en el manejo de los recursos económicos del colegio, como así también velar por el cumplimiento de las normativas y políticas financieras establecidas.',
    titular2: [
      { nombre: 'María Laura Asencio', cargo: 'Titular' },
      { nombre: 'Natalia Ratoff', cargo: 'Titular' },
      { nombre: 'Gisela Medina', cargo: 'Titular' },
    ],
    suplente2: [
      { nombre: 'María Teresa Neris', cargo: 'Suplente' },
      { nombre: 'María Luz De Elizalde', cargo: 'Suplente' },
    ],
  },
  {
    title3: 'Tribunal de ética',
    descripcion3: 'Descripción del Tribunal de ética',
    titular3: [
      { nombre: 'Rosalba Tullberg', cargo: 'Titular' },
      { nombre: 'María del Carmen Junghanns', cargo: 'Titular' },
      { nombre: 'Liliana Dos Santos', cargo: 'Titular' },
    ],
    suplente3: [
      { nombre: 'Sylvia Barberis', cargo: 'Suplente' },
      { nombre: 'Vanina Ruiz', cargo: 'Suplente' },
    ],
  },
];

const Organizacion = () => {
  return (
    <div className='container'>
      {comisiones.map((comision, index) => (
        <div key={index} className='comision'>
          <h1 className='comisionTitle'>{comision.title}</h1>
          <p>{comision.descripcion}</p>
          <div className='fila11'>
            {comision.presidente && (
              <div>
                <h3 className='nombre'>{comision.presidente.nombre}</h3>
                <p>{comision.presidente.cargo}</p>
              </div>
            )}
          </div>
         
          <div className="fila33-container" style={{ display: 'flex' }}>
            {comision.vocalTitular && comision.vocalTitular.length > 0 && (
              <div className='fila33'>
                {comision.vocalTitular.map((vocal, i) => (
                  <div key={i}>
                    <h3 className='nombre'>{vocal.nombre}</h3>
                    <p>{vocal.cargo}</p>
                  </div>
                ))}
              </div>
            )}
            {comision.vocalSuplente && comision.vocalSuplente.length > 0 && (
              <div className='fila33'>
                {comision.vocalSuplente.map((vocal, i) => (
                  <div key={i}>
                    <h3 className='nombre'>{vocal.nombre}</h3>
                    <p>{vocal.cargo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="section-margin"></div> {/* Añade este espacio entre secciones */}
        </div>
      ))}

      {comisiones.map((comision, index) => (
        <div key={index} className='comision'>
          <h1 className='comisionTitle'>{comision.title2}</h1>
          <p>{comision.descripcion2}</p>
          <div className="fila33-container" style={{ display: 'flex' }}>
            {comision.suplente2 && comision.suplente2.length > 0 && (
              <div className='fila33'>
                {comision.suplente2.map((suplente2, i) => (
                  <div key={i}>
                    <h3 className='nombre'>{suplente2.nombre}</h3>
                    <p>{suplente2.cargo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="fila33-container" style={{ display: 'flex' }}>
            {comision.titular2 && comision.titular2.length > 0 && (
              <div className='fila33'>
                {comision.titular2.map((titular2, i) => (
                  <div key={i}>
                    <h3 className='nombre'>{titular2.nombre}</h3>
                    <p>{titular2.cargo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="section-margin"></div> {/* Añade este espacio entre secciones */}
        </div>
      ))}

      {comisiones.map((comision, index) => (
        <div key={index} className='comision'>
          <h1 className='comisionTitle'>{comision.title3}</h1>
          <p>{comision.descripcion3}</p>
          <div className="fila33-container" style={{ display: 'flex' }}>
            {comision.suplente3 && comision.suplente3.length > 0 && (
              <div className='fila33'>
                {comision.suplente3.map((suplente3, i) => (
                  <div key={i}>
                    <h3 className='nombre'>{suplente3.nombre}</h3>
                    <p>{suplente3.cargo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="fila33-container" style={{ display: 'flex' }}>
            {comision.titular3 && comision.titular3.length > 0 && (
              <div className='fila33'>
                {comision.titular3.map((titular3, i) => (
                  <div key={i}>
                    <h3 className='nombre'>{titular3.nombre}</h3>
                    <p>{titular3.cargo}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="section-margin"></div> {/* Añade este espacio entre secciones */}
        </div>
      ))}
    </div>
  );
};

export default Organizacion;


