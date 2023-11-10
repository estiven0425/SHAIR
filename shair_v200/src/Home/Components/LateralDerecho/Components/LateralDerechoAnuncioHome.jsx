import Figure from 'react-bootstrap/Figure';
import axios from 'axios';
import './LateralDerechoAnuncioHome.css';

function LateralDerechoAnuncioHome() {
  return (
    <Figure id='LateralDerechoAnuncioHomePrincipal'>
      <Figure.Image className='Anuncio'
        width={160}
        height={160}
        alt="Este espacio es reservado para nuestros patrocinadores, descubre como puedes promocionarte en la sección de anuncios"
        src=""
      />
    </Figure>
  );
}

export default LateralDerechoAnuncioHome;