import React from 'react';
import './LateralDerechoHome.css';
import LateralDerechoAccionesHome from './Components/LateralDerechoAccionesHome';
import LateralDerechoAnuncio1Home from './Components/LateralDerechoAnuncioHome';

const LateralDerechoHome = ({ isLoggedIn }) => {
  return (
    <div id='LateralDerechoHomePrincipal'>
      <section id='DerechaAcciones'>
        <LateralDerechoAccionesHome isLoggedIn={isLoggedIn} />
      </section>

      <section id='DerechaAnuncio'>
        <LateralDerechoAnuncio1Home isLoggedIn={isLoggedIn} />
      </section>
    </div>
  );
};

export default LateralDerechoHome;
