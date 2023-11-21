import React from "react";
import "./BarraDeNavegacionBusquedaHome.css";
import BarraDeNavegacionBusquedaEspacioHome from "./BarraDeNavegacionBusquedaComponents/BarraDeNavegacionBusquedaEspacioHome";
import BarraDeNavegacionBusquedaBotonHome from "./BarraDeNavegacionBusquedaComponents/BarraDeNavegacionBusquedaBotonHome";
import { useAuth } from "../../../../BD_v200/AuthContext";

export default function BarraDeNavegacionBusquedaHome() {
  const { isLoggedIn, IdUsuario } = useAuth();
  return (
    <div id="BarraDeNavegacionBusquedaHomePrincipal">
      <BarraDeNavegacionBusquedaEspacioHome
        isLoggedIn={isLoggedIn}
        IdUsuario={IdUsuario}
      />
      <BarraDeNavegacionBusquedaBotonHome
        isLoggedIn={isLoggedIn}
        IdUsuario={IdUsuario}
      />
    </div>
  );
}
