import React from 'react'
import axios from 'axios';
import './LateralDerechoHome.css';
import LateralDerechoAccionesHome from './Components/LateralDerechoAccionesHome';
import LateralDerechoAnuncio1Home from './Components/LateralDerechoAnuncioHome';

export default function LateralDerechoHome() {
  return (
    <div id='LateralDerechoHomePrincipal'>

      <section id='DerechaAcciones'>
        <LateralDerechoAccionesHome/>
      </section>

      <section id='DerechaAnuncio'>
        <LateralDerechoAnuncio1Home/>
      </section>

    </div>
  )
}
