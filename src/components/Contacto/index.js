import React from 'react';
import './contacto.css';
import 'boxicons';


const Contacto = () => {
  const emailButtonHandler = () => {
    window.location.href = 'Mailto:administracion@cofomi.org.ar';
  };

  const wppButtonHandler = () => {
    window.location.href = 'https://wa.me/5493765385306';
  };




  return (
    <div id='contacto'>
      <div className="contact-container">
        <div className="contact-image-container">
          <div className='overlay2'></div>
          <img src={require('../../../src/assets/contacto-fondo.jpg')} alt="Contact" className="contact-image" />
          <div className="text-over-image">Contactanos</div>
          <button onClick={emailButtonHandler} className="email-button">
            Enviar correo electrónico
          </button>

          <button onClick={wppButtonHandler} className="wpp-button">
            Enviar whatsapp
          </button>
           <div className="iconContacto">
          
            <box-icon name='current-location' className='iconContactologo' ></box-icon> <p className='pContacto'>Pedro Mendez 2426, segundo piso </p>
            <box-icon type="logo" name="gmail" className='iconContactologo'></box-icon> <p className='pContacto'>administracion@cofomi.com.ar</p>
            <box-icon name='phone' type='solid' className='iconContactologo'></box-icon> <p className='pContacto'>+54 9 3765385306</p>
         </div>
        </div>
      </div>
      
      <div className='contact-responsive'>
        <a className='a-responsive'><strong>Contáctanos</strong></a>
        <ul className='ul-responsive'>
          <li className='li-responsive'>Pedro Mendez 2426, segundo piso</li>
          <li  className='li-responsive'>administracion@cofomi.com.ar</li>
          <li  className='li-responsive'>+54 9 3765385306</li>
        </ul>
        <button onClick={emailButtonHandler} className="email-button-responsive">
            Enviar correo electrónico
          </button>

          <button onClick={wppButtonHandler} className="wpp-button-responsive">
            Enviar whatsapp
          </button>
      </div>
      
    </div>
  );
};

export default Contacto;
