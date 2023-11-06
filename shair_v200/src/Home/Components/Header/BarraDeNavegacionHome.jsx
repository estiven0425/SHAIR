import React from 'react'
import './BarraDeNavegacionHome.css';
import BarraDeNavegacioEnlacesHome from './Components/BarraDeNavegacioEnlacesHome';
import BarraDeNavegacionBusquedaHome from './Components/BarraDeNavegacionBusquedaHome';
import BarraDeNavegacionSesionHome from './Components/BarraDeNavegacionSesionHome';

export default function BarraDeNavegacionHome() {
  return (
    <div id='BarraDeNavegacionHomePrincipal'>
      <BarraDeNavegacioEnlacesHome/>
      <BarraDeNavegacionBusquedaHome/>
      <BarraDeNavegacionSesionHome/>
    </div>
  )
}
