import Figure from 'react-bootstrap/Figure';
import axios from 'axios';
import './LateralIzquierdoAnuncioHome.css';
import { useAuth } from '../../../../BD_v200/AuthContext';

function LateralIzquierdoAnuncio2Home() {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();
  return (
    <Figure className='LateralIzquierdoAnuncioHomePrincipal'>
      <Figure.Image className='Anuncios'
        width={"100%"}
        height={"100%"}
        alt="Este espacio es reservado para nuestros patrocinadores, descubre como puedes promocionarte en la sección de anuncios"
        src=""
      />
    </Figure>
  );
}

export default LateralIzquierdoAnuncio2Home;