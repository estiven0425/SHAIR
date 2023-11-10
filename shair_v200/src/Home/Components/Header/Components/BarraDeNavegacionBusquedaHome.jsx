import React from 'react'
import axios from 'axios';
import './BarraDeNavegacionBusquedaHome.css';
import BarraDeNavegacionBusquedaEspacioHome from './BarraDeNavegacionBusquedaComponents/BarraDeNavegacionBusquedaEspacioHome'
import BarraDeNavegacionBusquedaBotonHome from './BarraDeNavegacionBusquedaComponents/BarraDeNavegacionBusquedaBotonHome'

export default function BarraDeNavegacionBusquedaHome() {
  return (
    <div id='BarraDeNavegacionBusquedaHomePrincipal'>

        <BarraDeNavegacionBusquedaEspacioHome/>
        <BarraDeNavegacionBusquedaBotonHome/>
        
    </div>
  )
}
