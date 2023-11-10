import React from 'react'
import axios from 'axios';
import BarraDeNavegacionSesionBotonHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionBotonHome'
import BarraDeNavegacionSesionCuentaHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionCuentaHome'
import './BarraDeNavegacionSesionHome.css';

export default function BarraDeNavegacionSesionHome() {
  return (
    <div id='BarraDeNavegacionSesionHomePrincipal'>

        <BarraDeNavegacionSesionBotonHome/>
        <BarraDeNavegacionSesionCuentaHome/>

    </div>
  )
}
