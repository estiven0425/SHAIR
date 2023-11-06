import Button from 'react-bootstrap/Button';
import './BarraDeNavegacionSesionBotonHome.css';

function BarraDeNavegacionSesionBotonHome() {
  return (
    <div id='BarraDeNavegacionSesionBotonHomePrincipal'>
      <Button variant="outline-primary" className='Boton'>Crear cuenta</Button>{' '}
      <Button variant="outline-primary" className='Boton'>Iniciar sesión</Button>{' '}
    </div>
  );
}

export default BarraDeNavegacionSesionBotonHome;