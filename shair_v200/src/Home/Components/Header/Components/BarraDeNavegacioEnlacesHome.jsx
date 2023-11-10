import React from 'react'
import axios from 'axios';
import './BarraDeNavegacioEnlacesHome.css';
import BarraDeNavegacionEnlacesAcordeonHome from './BarraDeNavegacionEnlacesComponents/BarraDeNavegacionEnlacesAcordeonHome'
import BarraDeNavegacionEnlacesContenidoHome from './BarraDeNavegacionEnlacesComponents/BarraDeNavegacionEnlacesContenidoHome'

export default function BarraDeNavegacioEnlacesHome() {
  return (
    <div id='BarraDeNavegacioEnlacesHomePrincipal'>

        <BarraDeNavegacionEnlacesContenidoHome/>
        <BarraDeNavegacionEnlacesAcordeonHome/>
        
    </div>
  )
}
