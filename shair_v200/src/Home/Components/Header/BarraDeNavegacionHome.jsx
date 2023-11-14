import React from 'react';
import './BarraDeNavegacionHome.css';
import BarraDeNavegacioEnlacesHome from './Components/BarraDeNavegacioEnlacesHome';
import BarraDeNavegacionBusquedaHome from './Components/BarraDeNavegacionBusquedaHome';
import BarraDeNavegacionSesionHome from './Components/BarraDeNavegacionSesionHome';

const BarraDeNavegacionHome = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div id='BarraDeNavegacionHomePrincipal'>
      <BarraDeNavegacioEnlacesHome />
      <BarraDeNavegacionBusquedaHome />
      <BarraDeNavegacionSesionHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </div>
  );
};

export default BarraDeNavegacionHome;
