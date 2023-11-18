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
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();
  return (
    <div id='LateralIzquierdoHomePrincipal'>

      <section id='IzquierdaTitulo'>
        <LateralIzquierdoTituloHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
      </section>

      <section id='IzquierdaAnuncios'>
        <LateralIzquierdoAnuncio1Home isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
        <LateralIzquierdoAnuncio2Home isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
        <LateralIzquierdoAnuncio3Home isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
      </section>

      <section id='IzquierdaSubtitulo'>
        <LateralIzquierdoSubtituloHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
      </section>

    </div>
  )
}
