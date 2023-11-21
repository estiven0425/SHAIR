import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../BD_v200/AuthContext";
import "./IniciarSesion.css";

const IniciarSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [fieldsVisible, setFieldsVisible] = useState(true);
  const {setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/SHAIR/shair_v200/src/BD_v200/ApiIniciarSesion.php",
        {
          EmailUsuario: email,
          ContraseñaUsuario: password,
        }
      );

      setErrorMessage("");
      setSuccessMessage("");

      if (response.data.error) {
        // Manejar el error
        setErrorMessage(response.data.message);
        setSuccessMessage("");
        setFieldsVisible(true);
      } else {
        // Si el ID del usuario no está disponible, manejarlo adecuadamente
        const { IdUsuario } = response.data;
        if (!IdUsuario) {
          console.error(
            "El ID del usuario no está disponible en la respuesta del servidor."
          );
          // Realizar cualquier acción necesaria
          return;
        }

        setIsLoggedIn(true);
        setSuccessMessage(response.data.message);
        setFieldsVisible(false);

        // Redirigir a la página del perfil del usuario que inició sesión
        setTimeout(() => {
          // Redirigir a la página del perfil del usuario actual
          navigate(`/UsuarioPropio/${IdUsuario}`);
        }, 3000);
      }
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
      setErrorMessage("Hubo un error al intentar iniciar sesión.");
      setSuccessMessage("");
      setFieldsVisible(true);
    }
  };

  return (
    <div id="IniciarSesionPrincipal">
      <Form id="FormularioIniciarSesion" onSubmit={handleLogin}>
        {errorMessage && <div className="error-message">{errorMessage}</div>}

        {successMessage && (
          <div className="success-message">
            {successMessage}
            <p>Redirigiendo a la página de perfil...</p>
          </div>
        )}

        {fieldsVisible && (
          <>
            <Form.Group controlId="formGridEmailIniciarSesion">
              <Form.Label className="TextoLabel">E-mail</Form.Label>
              <Form.Control
                className="Input"
                type="email"
                name="EmailUsuario"
                placeholder="Ingrese su e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formGridPasswordIniciarSesion">
              <Form.Label className="TextoLabel">Contraseña</Form.Label>
              <Form.Control
                className="Input"
                type="password"
                name="ContraseñaUsuario"
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button
              variant="outline-primary"
              type="submit"
              id="AccederIniciarSesion"
            >
              Iniciar Sesión
            </Button>
          </>
        )}
      </Form>
    </div>
  );
};

export default IniciarSesion;
