import React from 'react';
import './Organizacion.css'
const comisiones = [
  {
    title: 'Comisión Directiva',
    descripcion: 'Asegurar la excelencia en la práctica de la fonoaudiología, así como garantizar la prestación de servicios de alta calidad a la sociedad.',
    presidente: { nombre: 'Analia Pereira', cargo: 'Presidente' },
   personas: [
               { nombre: 'Ana Laura Brown', cargo: 'Vicepresidente' },
               { nombre: 'Silvia Cesari', cargo: 'Secretaria' },
               { nombre: 'Vanesa Manzi', cargo: 'Tesorera' },
   ],

    
    vocalTitular: [
      { nombre: 'Alicia Orfilia', cargo: 'Vocal titular 1°' },
      { nombre: 'Alicia Amarilla', cargo: 'Vocal titular 2°' },
    ],
    vocalSuplente: [
      { nombre: 'Graciela Guerrero Kruk', cargo: 'Vocal suplente 1°' },
      { nombre: 'Liliana Da Silva', cargo: 'Vocal suplente 2°' },
    ],
    },
];

const comisiones2 = [
  {
    title2: 'Comisión Revisora de cuentas',
    descripcion2: 'Garantizar la transparencia en el manejo de los recursos económicos del colegio, como así también velar por el cumplimiento de las normativas y políticas financieras establecidas.',
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
];

const comisiones3 = [
  {
    title3: 'Tribunal de ética',
    descripcion3: 'Garantizar el adecuado ejercicio de la profesión y mantener altos estándares éticos en la práctica de la fonoaudiología',
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

function App() {
  return (
    <div className="container">


       {/*Comision Directiva*/ }
     <div className="comisionDirectiva">
  {comisiones.map((comision, index) => (
    <div key={index}>
      <h2 className="comision-title">{comision.title}</h2>
      <p className="subtitle">{comision.descripcion}</p>
      <div className="fila1"> {/*Presidente*/}
        <h3 className="nombre">{comision.presidente.nombre}</h3>
        <p>{comision.presidente.cargo}</p>
      </div>
    

                  
         <div className="fila2">{/*Vicepresidente, secretaria y tesorera*/}
          {comision.personas.map((persona, i) => (
             <div key={i} className="fila2">
              <h3 className="nombre">{persona.nombre}</h3>
              <p>{persona.cargo}</p>
             </div>
          ))}
         </div>
    </div>
  ))}
              
  {comisiones.map((comision, index) => (
          <div key={index}> {/*Vocales titulares y suplentes*/}
            {comision.vocalTitular &&
              comision.vocalTitular.length > 0 &&
              comision.vocalTitular.map((vocal, i) => (
            <div key={i} className="fila3">
              <h3 className="nombre">{vocal.nombre}</h3>
              <p>{vocal.cargo}</p>
            </div>
            ))}

            {comision.vocalSuplente &&
             comision.vocalSuplente.length > 0 &&
             comision.vocalSuplente.map((vocal, i) => (
            <div key={i} className="fila3">
              <h3 className="nombre">{vocal.nombre}</h3>
              <p>{vocal.cargo}</p>
            </div>
             ))}
          </div>
   ))}

</div>

      

      {/*Comision revisora de cuentas*/ }
      <div className="comisiones-container">
        {comisiones2.map((comision, index) => (
          <div key={index}>
            <h2 className="comision-title">{comision.title2}</h2>
            <p className="subtitle">{comision.descripcion2}</p>
            <div className="fila2">
              {comision.titular2.map((titular, i) => (
                <div key={i} className="fila2">
                  <h3 className="nombre">{titular.nombre}</h3>
                  <p>{titular.cargo}</p>
                </div>
              ))}
            </div>
           </div>
        ))}

        {comisiones2.map((comision, index) => (
          <div key={index}>

            <div className="fila3">
              {comision.suplente2.map((suplente, i) => (
                <div key={i} className="fila3">
                  <h3 className="nombre">{suplente.nombre}</h3>
                  <p>{suplente.cargo}</p>
                </div>
              ))}
            </div>
           </div>
        ))}
      </div>



    {/*Tribunal de ética*/}
      <div className="comisiones-container"> {/*titulares*/}
        {comisiones3.map((comision, index) => (
          <div key={index}>
            <h2 className="comision-title">{comision.title3}</h2>
            <p className="subtitle">{comision.descripcion3}</p>
            <div className="fila2">
              {comision.titular3.map((titular, i) => (
                <div key={i} className="fila2">
                  <h3 className="nombre">{titular.nombre}</h3>
                  <p>{titular.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        {comisiones3.map((comision, index) => (
          <div key={index}> {/*suplentes*/}
             {comision.suplente3.map((suplente, i) => (
                <div key={i} className="fila3">
                  <h3 className="nombre">{suplente.nombre}</h3>
                  <p>{suplente.cargo}</p>
                </div>
              ))}
            </div>
        ))}
      </div>
    </div>
  );
}


export default App;
