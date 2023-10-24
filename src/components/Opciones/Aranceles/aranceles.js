import React from 'react';
import './aranceles.css';  // Import the CSS file

 const openArancelespdf = () => {
  window.open('https://drive.google.com/file/d/1HaVPncWGRsFDpEwdTAleqwsdRv-zMEpq/view?usp=sharing', '_blank');
};


const Aranceles = () => {
  return (
    <div className='container'>
      <div className='title'> <h1 className='valores'>Valores de consultas éticos sugeridos</h1></div>
  <section class="layout">
    
  <div class="consultaVirtual"><h2>Consulta fonoaudiológica en consultorio/virtual</h2></div>
  <div class="consultaVirtual"><h2>$4500 - 40 a 60 minutos, individual</h2></div>
  <div class="consultaPresencial"><h2>Consulta fonoaudiológica a domicilio</h2></div>
  <div class="consultaVirtual"><h2>$5000 - 40 a 60 minutos, individual</h2></div>
</section>
<button onClick={openArancelespdf} className='btn-sugeridos'><h2>Ver valores sugeridos de otras prácticas</h2></button>
</div>
  );

}

export default Aranceles;
