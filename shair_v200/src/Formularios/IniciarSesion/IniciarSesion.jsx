import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import axios from 'axios'; // Importamos Axios
import { useNavigate } from 'react-router-dom';
import './IniciarSesion.css';

function IniciarSesion() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [fieldsVisible, setFieldsVisible] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiIniciarSesion.php', {
        EmailUsuario: email,
        ContraseñaUsuario: password,
      });

      // Resetear el mensaje de error al manejar la respuesta del servidor
      setErrorMessage('');

      // Manejar la respuesta del servidor
      if (response.data.error) {
        setErrorMessage(response.data.message);
        setSuccessMessage('');
        setFieldsVisible(true); // Mostrar campos en caso de error
      } else {
        setIsLoggedIn(true);
        setSuccessMessage(response.data.message);

        // Ocultar los campos después de un inicio de sesión exitoso
        setFieldsVisible(false);

        // Después de un tiempo (por ejemplo, 3 segundos), redirige a la página principal
        setTimeout(() => {
          navigate('/Home');
        }, 3000);
      }
    } catch (error) {
      // Manejar errores, por ejemplo, mostrar un mensaje de error al usuario.
      console.error('Error de inicio de sesión:', error);
      setErrorMessage('Hubo un error al intentar iniciar sesión.');
      setSuccessMessage('');
      setFieldsVisible(true); // Mostrar campos en caso de error
    }
  };

  return (
    <div id='IniciarSesionPrincipal'>
      <Form id='FormularioIniciarSesion' onSubmit={handleLogin}>
        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="success-message">
            {successMessage}
            <p>Redirigiendo a la página principal...</p>
          </div>
        )}

        {fieldsVisible && (
          <>
            <Form.Group as={Col} controlId="formGridEmailIniciarSesion">
              <Form.Label className='TextoLabel'>E-mail</Form.Label>
              <Form.Control
                className='Input'
                type="email"
                name='EmailUsuarioIniciarSesion'
                placeholder="Ingrese su e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPasswordIniciarSesion">
              <Form.Label className='TextoLabel'>Contraseña</Form.Label>
              <Form.Control
                className='Input'
                type="password"
                name='ContraseñaUsuarioIniciarSesion'
                placeholder="Ingrese su contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="outline-primary" type='submit' id='AccederIniciarSesion'>
              Iniciar Sesión
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}

export default IniciarSesion;
