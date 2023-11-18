import React from 'react';
import './BarraDeNavegacionSesionHome.css';
import BarraDeNavegacionSesionBotonHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionBotonHome';
import BarraDeNavegacionSesionCuentaHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionCuentaHome';
import { useAuth } from '../../../../BD_v200/AuthContext';

const BarraDeNavegacionSesionHome = () => {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();

  return (
    <div id='BarraDeNavegacionSesionHomePrincipal'>
      <BarraDeNavegacionSesionBotonHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
      <BarraDeNavegacionSesionCuentaHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
    </div>
  );
};

export default BarraDeNavegacionSesionHome;
