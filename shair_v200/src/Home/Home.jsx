import React from 'react'
import './Home.css';
import BarraDeNavegacionHome from './Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from './Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from './Components/LateralDerecho/LateralDerechoHome';

export default function Home() {
  return (
    <div id='PrincipalHome'>

      <header>
        <BarraDeNavegacionHome/>
      </header>

      <body>

        <section id='IzquierdaHome'>
          <LateralIzquierdoHome/>
        </section>

        <section id='DerechoHome'>
          <LateralDerechoHome/>
        </section>

      </body>

    </div>
  )
}
