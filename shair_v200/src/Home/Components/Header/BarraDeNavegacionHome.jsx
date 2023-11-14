import React from 'react';
import './BarraDeNavegacionHome.css';
import BarraDeNavegacioEnlacesHome from './Components/BarraDeNavegacioEnlacesHome';
import BarraDeNavegacionBusquedaHome from './Components/BarraDeNavegacionBusquedaHome';
import BarraDeNavegacionSesionHome from './Components/BarraDeNavegacionSesionHome';
import { useAuth } from '../../../BD_v200/AuthContext';

const BarraDeNavegacionHome = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div id='BarraDeNavegacionHomePrincipal'>
      <BarraDeNavegacioEnlacesHome />
      <BarraDeNavegacionBusquedaHome />
      <BarraDeNavegacionSesionHome isLoggedIn={isLoggedIn} />
    </div>
  );
};

export default BarraDeNavegacionHome;
