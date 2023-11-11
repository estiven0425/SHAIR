import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CrearCuenta.css';

// ...

function CrearCuenta() {
  const [formData, setFormData] = useState({
    Nombre: '',
    NombreUsuario: '',
    EmailUsuario: '',
    ContraseñaUsuario: '',
    DescripcionUsuario: '',
    AceptaCondiciones: false, // Nuevo estado para el checkbox
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Si el tipo es checkbox, actualiza el estado de acuerdo al valor checked
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Verifica si el checkbox está marcado
    if (!formData.AceptaCondiciones) {
      setErrorMessage('Debe aceptar las políticas y condiciones para crear una cuenta.');
      return;
    }

    axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiCrearUsuario.php', formData)
      .then(response => {
        if (response.data.error) {
          // Muestra el mensaje de error en el formulario, pero no inicia la cuenta regresiva
          setErrorMessage(response.data.message);
          setSuccessMessage('');

          // Enfocar en el campo de error correspondiente (nombre de usuario, correo electrónico o checkbox)
          if (response.data.field === 'email') {
            document.getElementById('formGridEmail').focus();
          } else if (response.data.field === 'nickname') {
            document.getElementById('formGridNickName').focus();
          } else {
            document.getElementById('formGridCheckbox').focus();
          }
        } else {
          setSuccessMessage(response.data.message);

          // Borrar el mensaje de error si existe
          setErrorMessage('');

          // Después de un tiempo (por ejemplo, 3 segundos), redirige a la página principal
          setTimeout(() => {
            navigate('/Home');
          }, 3000);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div id='CrearCuentaPrincipal'>
      <Form onSubmit={handleSubmit} id='FormularioCrearCuenta'>

        {errorMessage && (
          <div className="error-message">
            {errorMessage}
          </div>
        )}

        {successMessage ? (
          <div className="success-message">
            {successMessage}
            <p>Redirigiendo a la página principal...</p>
          </div>  
        ) : (
          <>
            <Row className="mb-3CrearCuentaNombres">
              <Form.Group as={Col} controlId="formGridName">
                <Form.Label className='TextoLabel'>Nombre</Form.Label>
                <Form.Control className='Input' type="text" name="Nombre" placeholder="Ingrese su nombre" onChange={handleInputChange} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridNickName">
                <Form.Label className='TextoLabel'>Nombre de usuario</Form.Label>
                <Form.Control className='Input' type="text" name='NombreUsuario' placeholder="Ingrese su nombre de usuario" onChange={handleInputChange} />
              </Form.Group>
            </Row>

            <Row className="mb-3CrearCuentaSeguridad">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label className='TextoLabel'>E-mail</Form.Label>
                <Form.Control className='Input' type="email" name='EmailUsuario' placeholder="Ingrese su e-mail" onChange={handleInputChange} />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label className='TextoLabel'>Contraseña</Form.Label>
                <Form.Control className='Input' type="password" name='ContraseñaUsuario' placeholder="Ingrese su contraseña" onChange={handleInputChange} />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3CrearCuentaDescripcion" controlId="formGridDescription">
              <Form.Label className='TextoLabel'>Descripción</Form.Label>
              <Form.Control className='Input' type='text' name='DescripcionUsuario' placeholder="Ingrese una descripción (opcional)" onChange={handleInputChange} />
            </Form.Group>

            <Form.Group className="mb-3CrearCuentaContrato" id="formGridCheckbox">
              <Form.Check
                className='TextoCheck'
                type="checkbox"
                label={<p>Al hacer clic acepta nuestras <a href='#'>políticas y condiciones</a>.</p>}
                name="AceptaCondiciones"
                onChange={handleInputChange}
              />
            </Form.Group>

            <Button variant="outline-primary" type='submit' id='UnirseCrearCuenta'>
              Unirte a SHAIR
            </Button>
          </>
        )}
      </Form>
    </div>
  );
}

export default CrearCuenta;
