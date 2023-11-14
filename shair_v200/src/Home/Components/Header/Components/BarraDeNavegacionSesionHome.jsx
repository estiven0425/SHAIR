import React from 'react';
import './BarraDeNavegacionSesionHome.css';
import BarraDeNavegacionSesionBotonHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionBotonHome';
import BarraDeNavegacionSesionCuentaHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionCuentaHome';
import './BarraDeNavegacionSesionHome.css';

const BarraDeNavegacionSesionHome = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div id='BarraDeNavegacionSesionHomePrincipal'>
      <BarraDeNavegacionSesionBotonHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <BarraDeNavegacionSesionCuentaHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default BarraDeNavegacionSesionHome;
