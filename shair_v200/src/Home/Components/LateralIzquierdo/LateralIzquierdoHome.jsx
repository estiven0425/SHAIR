import React from 'react'
import axios from 'axios';
import './LateralIzquierdoHome.css';
import LateralIzquierdoTituloHome from './Components/LateralIzquierdoTituloHome';
import LateralIzquierdoAnuncio1Home from './Components/LateralIzquierdoAnuncio1Home';
import LateralIzquierdoAnuncio2Home from './Components/LateralIzquierdoAnuncio2Home';
import LateralIzquierdoAnuncio3Home from './Components/LateralIzquierdoAnuncio3Home';
import LateralIzquierdoSubtituloHome from './Components/LateralIzquierdoSubtituloHome';
import { useAuth } from '../../../BD_v200/AuthContext';

export default function LateralIzquierdoHome() {
  const { isLoggedIn } = useAuth();
  return (
    <div id='LateralIzquierdoHomePrincipal'>

      <section id='IzquierdaTitulo'>
        <LateralIzquierdoTituloHome isLoggedIn={isLoggedIn} />
      </section>

      <section id='IzquierdaAnuncios'>
        <LateralIzquierdoAnuncio1Home isLoggedIn={isLoggedIn} />
        <LateralIzquierdoAnuncio2Home isLoggedIn={isLoggedIn} />
        <LateralIzquierdoAnuncio3Home isLoggedIn={isLoggedIn} />
      </section>

      <section id='IzquierdaSubtitulo'>
        <LateralIzquierdoSubtituloHome isLoggedIn={isLoggedIn} />
      </section>

    </div>
  )
}
