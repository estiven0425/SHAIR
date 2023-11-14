import React from 'react';
import './BarraDeNavegacionSesionHome.css';
import BarraDeNavegacionSesionBotonHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionBotonHome';
import BarraDeNavegacionSesionCuentaHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionCuentaHome';
import { useAuth } from '../../../../BD_v200/AuthContext';

const BarraDeNavegacionSesionHome = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div id='BarraDeNavegacionSesionHomePrincipal'>
      <BarraDeNavegacionSesionBotonHome isLoggedIn={isLoggedIn} />
      <BarraDeNavegacionSesionCuentaHome isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default BarraDeNavegacionSesionHome;
