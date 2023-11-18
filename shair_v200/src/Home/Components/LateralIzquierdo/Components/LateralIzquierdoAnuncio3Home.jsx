import Figure from 'react-bootstrap/Figure';
import axios from 'axios';
import './LateralIzquierdoAnuncio3Home.css';
import { useAuth } from '../../../../BD_v200/AuthContext';

function LateralIzquierdoAnuncio3Home() {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();
  return (
    <Figure id='LateralIzquierdoAnuncio3HomePrincipal'>
      <Figure.Image className='Anuncios'
        width={"100%"}
        height={"100%"}
        alt="Este espacio es reservado para nuestros patrocinadores, descubre como puedes promocionarte en la sección de anuncios"
        src=""
      />
    </Figure>
  );
}

export default LateralIzquierdoAnuncio3Home;