import React from 'react'
import axios from 'axios';
import './LateralIzquierdoSubtituloHome.css';
import { useAuth } from '../../../../BD_v200/AuthContext';

export default function LateralIzquierdoSubtituloHome() {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();
  return (
    <div id='LateralIzquierdoSubtituloHomePrincipal'>
        <a href='#'>¿Por qué anuncios?</a>
    </div>
  )
}
