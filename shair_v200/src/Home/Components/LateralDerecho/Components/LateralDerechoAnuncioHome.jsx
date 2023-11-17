import Figure from 'react-bootstrap/Figure';
import axios from 'axios';
import './LateralDerechoAnuncioHome.css';
import { useAuth } from '../../../../BD_v200/AuthContext';

function LateralDerechoAnuncioHome() {
  const { isLoggedIn } = useAuth();
  return (
    <Figure id='LateralDerechoAnuncioHomePrincipal'>
      <Figure.Image className='Anuncio'
        width={"100%"}
        height={"100%"}
        alt="Este espacio es reservado para nuestros patrocinadores, descubre como puedes promocionarte en la sección de anuncios"
        src=""
      />
    </Figure>
  );
}

export default LateralDerechoAnuncioHome;