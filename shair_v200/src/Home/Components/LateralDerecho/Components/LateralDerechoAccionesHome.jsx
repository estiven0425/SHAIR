import React from 'react';
import './LateralDerechoAnuncioHome.css';
import LateralDerechoAccionesBotonSesionHome from './LateralDerechoAccionesHomeComponents/LateralDerechoAccionesBotonSesionHome';

const LateralDerechoAccionesHome = ({ isLoggedIn }) => {
  return (
    <section id='LateralDerechoAccionesHomePrincipal'>
      <LateralDerechoAccionesBotonSesionHome isLoggedIn={isLoggedIn} />
    </section>
  );
};

export default LateralDerechoAccionesHome;
