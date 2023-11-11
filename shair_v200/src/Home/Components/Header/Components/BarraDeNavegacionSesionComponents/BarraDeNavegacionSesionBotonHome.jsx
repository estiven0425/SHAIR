import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './BarraDeNavegacionSesionBotonHome.css';

function BarraDeNavegacionSesionBotonHome() {
  return (
    <div id='BarraDeNavegacionSesionBotonHomePrincipal'>
      <Button variant="outline-primary" className='BotonBarraDeNavegacion' href= '/CrearCuenta'>Crear cuenta</Button>{' '}
      <Button variant="outline-primary" className='BotonBarraDeNavegacion' href='/IniciarSesion'>Iniciar sesión</Button>{' '}
    </div>
  );
}

export default BarraDeNavegacionSesionBotonHome;