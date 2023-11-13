import React from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './BarraDeNavegacionSesionBotonHome.css';

function BarraDeNavegacionSesionBotonHome({ isLoggedIn, setIsLoggedIn }) {

  const handleLogout = async () => {
    try {
      const response = await axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiCerrarSesion.php');

      if (response.data.success) {
        setIsLoggedIn(false);
        alert('Sesión cerrada exitosamente');
      } else {
        console.error('Error al cerrar sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const renderButtons = () => {
    if (isLoggedIn) {
      return (
        <Button variant="outline-primary" className='BotonBarraDeNavegacion' onClick={handleLogout}>
          Cerrar sesión
        </Button>
      );
    } else {
      return (
        <>
          <Button variant="outline-primary" className='BotonBarraDeNavegacion' href='/CrearCuenta'>
            Crear cuenta
          </Button> {' '}
          <Button variant="outline-primary" className='BotonBarraDeNavegacion' href='/IniciarSesion'>
            Iniciar sesión
          </Button> {' '}
        </>
      );
    }
  };

  return (
    <div id='BarraDeNavegacionSesionBotonHomePrincipal'>
      {renderButtons()}
    </div>
  );
}

export default BarraDeNavegacionSesionBotonHome;
