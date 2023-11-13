import React from 'react'
import axios from 'axios';
import BarraDeNavegacionSesionBotonHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionBotonHome'
import BarraDeNavegacionSesionCuentaHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionCuentaHome'
import './BarraDeNavegacionSesionHome.css';

export default function BarraDeNavegacionSesionHome({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div id='BarraDeNavegacionSesionHomePrincipal'>

      <BarraDeNavegacionSesionBotonHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <BarraDeNavegacionSesionCuentaHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

    </div>
  )
}
