import React from 'react'
import axios from 'axios';
import './BarraDeNavegacionBusquedaHome.css';
import BarraDeNavegacionBusquedaEspacioHome from './BarraDeNavegacionBusquedaComponents/BarraDeNavegacionBusquedaEspacioHome'
import BarraDeNavegacionBusquedaBotonHome from './BarraDeNavegacionBusquedaComponents/BarraDeNavegacionBusquedaBotonHome'
import { useAuth } from '../../../../BD_v200/AuthContext';

export default function BarraDeNavegacionBusquedaHome() {
  const { isLoggedIn } = useAuth();
  return (
    <div id='BarraDeNavegacionBusquedaHomePrincipal'>

        <BarraDeNavegacionBusquedaEspacioHome isLoggedIn={isLoggedIn} />
        <BarraDeNavegacionBusquedaBotonHome isLoggedIn={isLoggedIn} />
        
    </div>
  )
}
