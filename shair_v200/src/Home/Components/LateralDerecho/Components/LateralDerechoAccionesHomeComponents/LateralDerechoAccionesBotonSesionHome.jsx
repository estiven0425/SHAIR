import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./LateralDerechoAccionesBotonHome.css";
import axios from "axios";

const LateralDerechoAccionesBotonSesionHome = ({ isLoggedIn }) => {
  const { IdUsuario, IdEspacio } = useParams();
  const [userSpaces, setUserSpaces] = useState([]);
  const [nombrePerfil, setNombrePerfil] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserSpaces = async () => {
      try {
        const response = await axios.get(
          `http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioUsuarioPropio.php?IdUsuario=${IdUsuario}`
        );
        console.log(response.data); // Verifica la estructura de la respuesta en la consola
        setUserSpaces(response.data);
        if (
          response.data &&
          response.data[0] &&
          response.data[0].NombreUsuario
        ) {
          setNombrePerfil(response.data[0].NombreUsuario);
        }
      } catch (error) {
        console.error("Error al obtener espacios del usuario:", error);
      }
    };

    // Llama a la función para obtener los espacios del usuario al montar el componente
    if (isLoggedIn) {
      fetchUserSpaces();
    }
  }, [isLoggedIn, IdUsuario]);

  return (
    <div id="LateralDerechoAccionesBotonSesionHomePrincipal">
      {location.pathname.startsWith("/UsuarioOtro") && (
        <div className="LateralDerechoAccionesBotonSesionHomePrincipalAccesos">
          <h1>Opciones de perfil</h1>
          <Button
            variant="outline-primary"
            className="BotonDerecha"
            onClick={() =>
              navigate(
                `/DenunciarCuenta/${IdUsuario}?nombrePerfil=${nombrePerfil}`
              )
            }
          >
            Denunciar Cuenta
          </Button>
        </div>
      )}

      {location.pathname.startsWith("/EspacioOtro") && (
        <div className="LateralDerechoAccionesBotonSesionHomePrincipalAccesos">
          <h1>Opciones del espacio</h1>
          <Button variant="outline-primary" className="BotonDerecha" href="#">
            Descargar Espacio
          </Button>
          <Button variant="outline-primary" className="BotonDerecha" href="#">
            Denunciar Espacio
          </Button>
          <Button variant="outline-primary" className="BotonDerecha" href="#">
            Denunciar Usuario
          </Button>
        </div>
      )}

      {isLoggedIn ? (
        // Muestra un título si la sesión está iniciada

        <div id="LateralDerechoAccionesBotonSesionHomeEspacio">
          {location.pathname.startsWith("/EspacioPropio") && (
            <div className="LateralDerechoAccionesBotonSesionHomePrincipalAccesos">
              <h1>Opciones del espacio</h1>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                onClick={() => navigate(`/ModificarEspacio/${IdEspacio}`)}
              >
                {" "}
                Modificar espacio{" "}
              </Button>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                href="#"
              >
                Subir de nivel
              </Button>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                href="#"
              >
                Descargar Espacio
              </Button>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                href="#"
              >
                Eliminar Espacio
              </Button>
            </div>
          )}

          {location.pathname.startsWith("/UsuarioPropio") && (
            <div id="LateralDerechoAccionesBotonSesionHomePrincipalAccesosP">
              <h1>Opciones de perfil</h1>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                onClick={() => navigate(`/ModificarCuenta/${IdUsuario}`)}
              >
                Modificar Cuenta
              </Button>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                href="#"
              >
                Subir de nivel
              </Button>
              <Button
                variant="outline-primary"
                className="BotonDerecha"
                onClick={() => navigate(`/EliminarCuenta/${IdUsuario}`)}
              >
                Eliminar Cuenta
              </Button>
            </div>
          )}

          <h1>Espacios</h1>
          {/* Mostrar la lista de espacios del usuario */}
          {Array.isArray(userSpaces) && userSpaces.length > 0 ? (
            userSpaces.map((item) => (
              <div
                key={item.IdEspacio}
                id="LateralDerechoAccionesBotonSesionHomeEspacioA"
              >
                <h1>{item.NombreEspacio}</h1>
                <p>Creado el: {item.FechaCreacion}</p>
              </div>
            ))
          ) : (
            <p>No tienes espacios. ¡Crea uno ahora!</p>
          )}
        </div>
      ) : (
        // Muestra el botón para iniciar sesión si no está autenticado
        <Button
          variant="outline-primary"
          className="BotonDerecha"
          href="/IniciarSesion"
        >
          Inicia sesión para ver tus espacios
        </Button>
      )}
    </div>
  );
};

export default LateralDerechoAccionesBotonSesionHome;
