import React from 'react'
import BarraDeNavegacionSesionBotonHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionBotonHome'
import BarraDeNavegacionSesionCuentaHome from './BarraDeNavegacionSesionComponents/BarraDeNavegacionSesionCuentaHome'

export default function BarraDeNavegacionSesionHome() {
  return (
    <div id='BarraDeNavegacionSesionHome'>

        <BarraDeNavegacionSesionBotonHome/>
        <BarraDeNavegacionSesionCuentaHome/>

    </div>
  )
}
