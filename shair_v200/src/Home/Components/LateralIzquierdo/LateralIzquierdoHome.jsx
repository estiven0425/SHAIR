import React from 'react'
import axios from 'axios';
import './LateralIzquierdoHome.css';
import LateralIzquierdoTituloHome from './Components/LateralIzquierdoTituloHome';
import LateralIzquierdoAnuncio1Home from './Components/LateralIzquierdoAnuncio1Home';
import LateralIzquierdoAnuncio2Home from './Components/LateralIzquierdoAnuncio2Home';
import LateralIzquierdoAnuncio3Home from './Components/LateralIzquierdoAnuncio3Home';
import LateralIzquierdoSubtituloHome from './Components/LateralIzquierdoSubtituloHome';

export default function LateralIzquierdoHome() {
  return (
    <div id='LateralIzquierdoHomePrincipal'>

      <section id='IzquierdaTitulo'>
        <LateralIzquierdoTituloHome/>
      </section>

      <section id='IzquierdaAnuncios'>
        <LateralIzquierdoAnuncio1Home/>
        <LateralIzquierdoAnuncio2Home/>
        <LateralIzquierdoAnuncio3Home/>
      </section>

      <section id='IzquierdaSubtitulo'>
        <LateralIzquierdoSubtituloHome/>
      </section>

    </div>
  )
}
