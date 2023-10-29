import React from 'react'
import './BarraFooter.css';
import Ubicacion from './Components/Ubicacion';
import Contacto from './Components/Contacto';
import MasInformacion from './Components/MasInformacion';
import CondicionesdeServicio from './Components/CondicionesdeServicio';

export default function BarraFooter() {
  return (
    <div id='BarraFooter'>
        <Ubicacion/>
        <Contacto/>
        <MasInformacion/>
        <CondicionesdeServicio/>
    </div>
  )
}
