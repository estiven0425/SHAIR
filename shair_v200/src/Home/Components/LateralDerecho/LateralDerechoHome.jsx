import React from "react";
import "./LateralDerechoHome.css";
import LateralDerechoAccionesHome from "./Components/LateralDerechoAccionesHome";
import LateralDerechoAnuncio1Home from "./Components/LateralDerechoAnuncioHome";
import { useAuth } from "../../../BD_v200/AuthContext";

function LateralDerechoHome() {
  const { isLoggedIn, IdUsuario } = useAuth();
  return (
    <div id="LateralDerechoHomePrincipal">
      <section id="DerechaAcciones">
        <LateralDerechoAccionesHome
          isLoggedIn={isLoggedIn}
          IdUsuario={IdUsuario}
          location="UsuarioOtro, UsuarioPropio"
        />
      </section>

      <section id="DerechaAnuncio">
        <LateralDerechoAnuncio1Home
          isLoggedIn={isLoggedIn}
          IdUsuario={IdUsuario}
          location="UsuarioOtro"
        />
      </section>
    </div>
  );
}

export default LateralDerechoHome;
