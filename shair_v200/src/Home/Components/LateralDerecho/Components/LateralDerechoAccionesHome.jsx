import React from 'react';
import './LateralDerechoAnuncioHome.css';
import LateralDerechoAccionesBotonSesionHome from './LateralDerechoAccionesHomeComponents/LateralDerechoAccionesBotonSesionHome';
import { useAuth } from '../../../../BD_v200/AuthContext';

function LateralDerechoAccionesHome() {
  const { isLoggedIn, setIsLoggedIn, IdUsuario, location } = useAuth();
  return (
    <section id='LateralDerechoAccionesHomePrincipal'>
      <LateralDerechoAccionesBotonSesionHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} location="UsuarioOtro, UsuarioPropio" />
    </section>
  );
};

export default LateralDerechoAccionesHome;
