import React from 'react'
import './BarraFooter.css';
import Ubicacion from './Components/Ubicacion';
import Contacto from './Components/Contacto';
import MasInformacion from './Components/MasInformacion';
import CondicionesdeServicio from './Components/CondicionesdeServicio';
import Dueño from './Components/Dueño';

export default function BarraFooter() {
  return (
    <div id='BarraFooter'>

        <div id='Informacion'>
          <Ubicacion/>
          <Contacto/>
          <MasInformacion/>
          <CondicionesdeServicio/>
        </div>

        <div id='Derechos'>
          <Dueño/>
        </div>

    </div>
  )
}
