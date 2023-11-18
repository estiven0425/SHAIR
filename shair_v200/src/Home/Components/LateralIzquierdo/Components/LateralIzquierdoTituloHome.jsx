import React from 'react'
import axios from 'axios';
import './LateralIzquierdoTituloHome.css';
import { useAuth } from '../../../../BD_v200/AuthContext';

export default function LateralIzquierdoTituloHome() {
  const { isLoggedIn, setIsLoggedIn, IdUsuario } = useAuth();
  return (
    <div id='LateralIzquierdoTituloHomePrincipal'>
      <h1>Anuncios</h1>
    </div>
  )
}
