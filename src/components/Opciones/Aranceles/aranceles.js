import React from 'react';
import './aranceles.css';  

 const openArancelespdf = () => {
  window.open('https://drive.google.com/file/d/1HaVPncWGRsFDpEwdTAleqwsdRv-zMEpq/view?usp=sharing', '_blank');
};


const Aranceles = () => {
  return (
    <div className='container'>
      <div className='title'> <h1 className='valores'>Aranceles mínimos éticos sugeridos</h1></div>
 
<div className='div-btn'><button onClick={openArancelespdf} className='btn-sugeridos'><h2 className='h2hover'>Ver grilla de prácticas y aranceles</h2></button></div>
</div>
  );

}

export default Aranceles;
