import React from 'react'
import './Home.css';
import BarraDeNavegacionHome from './Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from './Components/LateralIzquierdo/LateralIzquierdoHome';

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

      </body>

    </div>
  )
}
