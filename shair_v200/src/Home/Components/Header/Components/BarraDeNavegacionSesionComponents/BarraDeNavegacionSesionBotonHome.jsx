import Button from 'react-bootstrap/Button';
import './BarraDeNavegacionSesionBotonHome.css';

function BarraDeNavegacionSesionBotonHome() {
  return (
    <div id='BarraDeNavegacionSesionBotonHomePrincipal'>
      <Button variant="outline-primary" className='BotonBarraDeNavegacion'>Crear cuenta</Button>{' '}
      <Button variant="outline-primary" className='BotonBarraDeNavegacion'>Iniciar sesión</Button>{' '}
    </div>
  );
}

export default BarraDeNavegacionSesionBotonHome;