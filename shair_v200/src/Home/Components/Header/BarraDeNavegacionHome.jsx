import React from 'react';
import './BarraDeNavegacionHome.css';
import BarraDeNavegacioEnlacesHome from './Components/BarraDeNavegacioEnlacesHome';
import BarraDeNavegacionBusquedaHome from './Components/BarraDeNavegacionBusquedaHome';
import BarraDeNavegacionSesionHome from './Components/BarraDeNavegacionSesionHome';
import { useAuth } from '../../../BD_v200/AuthContext';

const BarraDeNavegacionHome = () => {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();

  return (
    <div id='BarraDeNavegacionHomePrincipal'>
      <BarraDeNavegacioEnlacesHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
      <BarraDeNavegacionBusquedaHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
      <BarraDeNavegacionSesionHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
    </div>
  );
};

export default BarraDeNavegacionHome;
