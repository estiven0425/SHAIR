import React from 'react'
import axios from 'axios';
import './BarraDeNavegacioEnlacesHome.css';
import BarraDeNavegacionEnlacesAcordeonHome from './BarraDeNavegacionEnlacesComponents/BarraDeNavegacionEnlacesAcordeonHome'
import BarraDeNavegacionEnlacesContenidoHome from './BarraDeNavegacionEnlacesComponents/BarraDeNavegacionEnlacesContenidoHome'
import { useAuth } from '../../../../BD_v200/AuthContext';

export default function BarraDeNavegacioEnlacesHome() {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();
  return (
    <div id='BarraDeNavegacioEnlacesHomePrincipal'>

        <BarraDeNavegacionEnlacesContenidoHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
        <BarraDeNavegacionEnlacesAcordeonHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
        
    </div>
  )
}
