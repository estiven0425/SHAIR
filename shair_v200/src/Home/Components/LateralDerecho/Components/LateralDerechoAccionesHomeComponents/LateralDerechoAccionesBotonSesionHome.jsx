import React from 'react';
import Button from 'react-bootstrap/Button';
import { useAuth } from '../../../../../BD_v200/AuthContext';
import './LateralDerechoAccionesBotonHome.css';

const LateralDerechoAccionesBotonSesionHome = ({ isLoggedIn }) => {
  return (
    <div id='LateralDerechoAccionesBotonSesionHomePrincipal'>
      {isLoggedIn ? (
        // Muestra un título si la sesión está iniciada
        <h3>Hola</h3>
      ) : (
        // Muestra el botón para iniciar sesión si no está autenticado
        <Button variant="outline-primary" className='BotonDerecha' href='/IniciarSesion'>Inicia sesión para ver tus espacios</Button>
      )}
    </div>
  );
};

export default LateralDerechoAccionesBotonSesionHome;
