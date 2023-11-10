import React from 'react'
import axios from 'axios';
import './LateralDerechoAccionesHome.css';
import LateralDerechoAccionesBotonSesionHome from './LateralDerechoAccionesHomeComponents/LateralDerechoAccionesBotonSesionHome';

export default function LateralDerechoAccionesHome() {
  return (
    <section id='LateralDerechoAccionesHomePrincipal'>
      <LateralDerechoAccionesBotonSesionHome/>
    </section>
  )
}
