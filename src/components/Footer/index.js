import React from 'react';
import './footer.css';
import 'boxicons';
import imagenFooter from '../../../src/assets/Cofomi_1.png'; // Reemplaza con la ruta de tu imagen

const Footer = () => {
  return (
    <section class="layoutFooter">
 <div className="social-media">
          <a href="https://www.facebook.com/CofomiOficial">
            <box-icon type="logo" name="facebook" style={{ width: '40px', height: '40px' }}></box-icon>
          
          </a>
          <a href="https://www.instagram.com/cofomi.oficial/">
            <box-icon type="logo" name="instagram" style={{ width: '40px', height: '40px' }}></box-icon>
          </a>
         
          <div className='derechos'>Todos los derechos reservados</div>
         </div>
  <div className="footer-image">
          <img src={imagenFooter} alt="Footer Image" /> <br></br> <p className='pCofomi'>Colegio de Fonoaudiólogos de Misiones</p>
        </div>
  <div className='copyright'>Desarrollado por CoDeCo</div>
</section>
  );
};

export default Footer;

/*<footer className="footer">
      <div className="footer-content">
        <div className="social-media">
          <a href="https://facebook.com">
            <box-icon type="logo" name="facebook"></box-icon>
          </a>
          <a href="https://instagram.com">
            <box-icon type="logo" name="instagram"></box-icon>
          </a>
          <a href="https://linkedin.com">
            <box-icon type="logo" name="linkedin"></box-icon>
          </a>
        </div>

        <div className="important-links">
          <p>
            <a href="https://example.com">Página Importante 1</a>
          </p>
          <p>
            <a href="https://example.com">Página Importante 2</a>
          </p>
        </div>
        
        <div className="footer-image">
          <img src={imagenFooter} alt="Footer Image" />
        </div>
      </div>

      
    </footer>*/