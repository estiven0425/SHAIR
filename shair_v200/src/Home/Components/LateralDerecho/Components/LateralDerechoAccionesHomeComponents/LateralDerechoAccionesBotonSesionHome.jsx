import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './LateralDerechoAccionesBotonHome.css';

function LateralDerechoAccionesBotonSesionHome() {
  return (
    <div id='LateralDerechoAccionesBotonSesionHomePrincipal'>
      <Button variant="outline-primary" className='BotonDerecha' href='/IniciarSesion'>Inicia sesión para ver tus espacios</Button>{' '}
    </div>
  );
}

export default LateralDerechoAccionesBotonSesionHome;