import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./EspacioOtro.css";
import BarraDeNavegacionHome from "../../Home/Components/Header/BarraDeNavegacionHome";
import LateralIzquierdoHome from "../../Home/Components/LateralIzquierdo/LateralIzquierdoHome";
import LateralDerechoHome from "../../Home/Components/LateralDerecho/LateralDerechoHome";
import { useParams } from "react-router-dom";
import { useAuth } from "../../BD_v200/AuthContext";

const EspacioOtro = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const { IdEspacio } = useParams();
  const [espacioData, setEspacioData] = useState({});
  const { IdUsuario } = useParams(); // Obtener IdUsuario de la URL

  const simulateLogin = async () => {
    // Simula una solicitud al servidor para iniciar sesión
    try {
      const response = await axios.post(
        "http://localhost/SHAIR/shair_v200/src/BD_v200/ApiSimularInicioSesion.php"
      );
      if (response.data.success) {
        setIsLoggedIn(true);
        alert("Inicio de sesión simulado exitosamente");
      } else {
        console.error(
          "Error al simular inicio de sesión:",
          response.data.message
        );
      }
    } catch (error) {
      console.error("Error al simular inicio de sesión:", error);
    }
  };

  useEffect(() => {
    // Obtener información del espacio
    axios
      .get(
        `http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioOtro.php?IdEspacio=${IdEspacio}`
      )
      .then((response) => {
        const espacioData = response.data;
        setEspacioData(espacioData);
      })
      .catch((error) => {
        console.error("Error al obtener datos del espacio:", error);
      });
  }, [IdEspacio]);

  return (
    <div id="PrincipalEspacioOtro">
      <header>
        <BarraDeNavegacionHome
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          IdUsuario={IdUsuario}
        />
      </header>

      <div id="bodyEspacioOtro">
        <section id="IzquierdaEspacioOtro">
          <LateralIzquierdoHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
        </section>

        <section id="CentroEspacioOtro">
          <div id="InformacionEspacioOtro">
            <h1>{espacioData.NombreEspacio}</h1>
            <p>{espacioData.DescripcionEspacio}</p>
            <Button
              variant="outline-primary"
              className="BotonDerecha"
              onClick={simulateLogin}
            >
              Simular inicio de sesión
            </Button>
          </div>

          <div id="ContenidoCentroEspacioOtro">
            <h1>Parece que este espacio no tiene archivos aún</h1>
            <p>Esperemos no dure mucho así</p>
          </div>
        </section>

        <section id="DerechoEspacioOtro">
          <LateralDerechoHome
            isLoggedIn={isLoggedIn}
            IdUsuario={IdUsuario}
            location="EspacioOtro"
          />
        </section>
      </div>
    </div>
  );
};

export default EspacioOtro;
