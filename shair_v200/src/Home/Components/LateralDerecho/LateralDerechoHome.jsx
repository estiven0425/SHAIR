import React from 'react';
import './LateralDerechoHome.css';
import LateralDerechoAccionesHome from './Components/LateralDerechoAccionesHome';
import LateralDerechoAnuncio1Home from './Components/LateralDerechoAnuncioHome';
import { useAuth } from '../../../BD_v200/AuthContext';

function LateralDerechoHome() {
  const { isLoggedIn } = useAuth();
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
