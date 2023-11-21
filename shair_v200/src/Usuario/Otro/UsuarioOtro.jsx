import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import "./UsuarioOtro.css";
import BarraDeNavegacionHome from "../../Home/Components/Header/BarraDeNavegacionHome";
import LateralIzquierdoHome from "../../Home/Components/LateralIzquierdo/LateralIzquierdoHome";
import LateralDerechoHome from "../../Home/Components/LateralDerecho/LateralDerechoHome";
import { useParams } from "react-router-dom"; // Importar useParams de react-router-dom
import { useAuth } from "../../BD_v200/AuthContext";

const UsuarioOtro = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [userData, setUserData] = useState({});
  const [espaciosData, setEspaciosData] = useState([]);

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

  const { IdUsuario } = useParams(); // Obtener IdUsuario de la URL

  useEffect(() => {
    // Obtener información del usuario y sus espacios
    axios
      .get(
        `http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioUsuarioOtro.php?IdUsuario=${IdUsuario}`
      )
      .then((response) => {
        const userData = response.data[0]; // Tomar el primer elemento ya que es el mismo para todos los espacios
        setUserData(userData);

        // Filtrar los espacios que pertenecen al usuario actual
        const espaciosDelUsuario = response.data.filter(
          (item) => item.IdUsuario === userData.IdUsuario
        );
        setEspaciosData(espaciosDelUsuario);
      })
      .catch((error) => {
        console.error("Error al obtener datos del usuario:", error);
      });
  }, [IdUsuario]);

  return (
    <div id="PrincipalUsuarioOtro">
      <header>
        <BarraDeNavegacionHome
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          IdUsuario={IdUsuario}
        />
      </header>

      <div id="bodyUsuarioOtro">
        <section id="IzquierdaUsuarioOtro">
          <LateralIzquierdoHome isLoggedIn={isLoggedIn} IdUsuario={IdUsuario} />
        </section>

        <section id="CentroUsuarioOtro">
          <div id="InformacionUsuarioOtro">
            <h1>{userData.NombreUsuario}</h1>
            <p>{userData.DescripcionUsuario}</p>
            <Button
              variant="outline-primary"
              className="BotonDerecha"
              onClick={simulateLogin}
            >
              Simular inicio de sesión
            </Button>
          </div>

          <div id="ContenidoCentroUsuarioOtro">
            <h1>Espacios</h1>
            {espaciosData.map((item) => (
              <a
                href={`/EspacioOtro/${item.IdEspacio}`}
                key={item.IdEspacio}
                id="ContenidoCentroUsuarioOtroA"
              >
                <div className="EspacioCentroUsuarioOtro">
                  <h1>{item.NombreEspacio}</h1>
                  <p>{item.DescripcionEspacio}</p>
                  <p>Fecha de creación: {item.FechaCreacion}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="DerechoUsuarioOtro">
          <LateralDerechoHome
            isLoggedIn={isLoggedIn}
            IdUsuario={IdUsuario}
            location="UsuarioOtro"
          />
        </section>
      </div>
    </div>
  );
};

export default UsuarioOtro;
