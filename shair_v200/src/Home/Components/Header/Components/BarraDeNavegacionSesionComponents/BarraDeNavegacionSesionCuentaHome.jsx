import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../../BD_v200/AuthContext";
import "./BarraDeNavegacionSesionCuentaHome.css";

function BarraDeNavegacionSesionCuentaHome() {
  const navigate = useNavigate();
  const { isLoggedIn, IdUsuario } = useAuth();

  // Manejador de clic para redirigir al perfil del usuario actual
  const handleProfileClick = () => {
    try {
      if (isLoggedIn) {
        // Redirige al perfil del usuario actual
        navigate(`/UsuarioPropio/${IdUsuario}`);
      } else {
        console.error(
          "No se puede redirigir al perfil: usuario no autenticado"
        );
      }
    } catch (error) {
      console.error("Error al redirigir al perfil:", error);
    }
  };

  return (
    <div id="BarraDeNavegacionSesionCuentaHomePrincipal">
      {/* Usa el manejador de clic en lugar de href */}
      <Button
        variant="outline-dark"
        className="PerfilBarraDeNavegacion"
        onClick={handleProfileClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="45"
          fill="currentColor"
          className="bi bi-person-circle"
          viewBox="0 0 16 16"
          color="#ffffff"
        >
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
          <path
            fillRule="evenodd"
            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
          />
        </svg>
      </Button>
    </div>
  );
}

export default BarraDeNavegacionSesionCuentaHome;
