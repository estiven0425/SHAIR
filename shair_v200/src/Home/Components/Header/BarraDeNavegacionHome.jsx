import React from 'react'
import axios from 'axios';
import './BarraDeNavegacionHome.css';
import BarraDeNavegacioEnlacesHome from './Components/BarraDeNavegacioEnlacesHome';
import BarraDeNavegacionBusquedaHome from './Components/BarraDeNavegacionBusquedaHome';
import BarraDeNavegacionSesionHome from './Components/BarraDeNavegacionSesionHome';

export default function BarraDeNavegacionHome({ isLoggedIn, setIsLoggedIn }) {
  return (
    <div id='BarraDeNavegacionHomePrincipal'>
      <BarraDeNavegacioEnlacesHome/>
      <BarraDeNavegacionBusquedaHome/>
      <BarraDeNavegacionSesionHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}
