import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CrearEspacio.css';

function CrearEspacio() {
  const [espacioData, setEspacioData] = useState({
    NombreEspacio: '',
    DescripcionEspacio: '',
    AceptaCondiciones: false,
  });

  const [errorNombre, setErrorNombre] = useState('');
  const [errorCondiciones, setErrorCondiciones] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEspacioData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar que el NombreEspacio no esté vacío
    if (!espacioData.NombreEspacio.trim()) {
      setErrorNombre('El Nombre del espacio no puede estar vacío');
      return;
    } else {
      setErrorNombre('');
    }

    // Verificar que se hayan aceptado los términos y condiciones
    if (!espacioData.AceptaCondiciones) {
      setErrorCondiciones('Debes aceptar los términos y condiciones');
      return;
    } else {
      setErrorCondiciones('');
    }

    try {
      // Enviar la solicitud al servidor con axios
      const response = await axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiCrearEspacio.php', espacioData);

      // Puedes manejar la respuesta según tus necesidades
      console.log(response.data);

      // Redireccionar o realizar otras acciones después de crear el espacio
      navigate('/UsuarioPropio/26');
    } catch (error) {
      // Manejar errores, por ejemplo, mostrar un mensaje al usuario
      console.error('Error al crear el espacio:', error);
    }
  };

  return (
    <div id='CrearEspacioPrincipal'>
      <div id='FormularioCrearEspacio'>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3CrearEspacioNombres">
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label className='TextoLabel'>Nombre del espacio</Form.Label>
              <Form.Control
                className='Input'
                type="text"
                name="NombreEspacio"
                placeholder="Ingrese el nombre del espacio"
                value={espacioData.NombreEspacio}
                onChange={handleChange}
              />
              <div className="errorMensaje">{errorNombre}</div>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3CrearEspacioDescripcion" controlId="formGridDescription">
            <Form.Label className='TextoLabel'>Descripción</Form.Label>
            <Form.Control
              className='Input'
              type='text'
              name='DescripcionEspacio'
              placeholder="Ingrese una descripción (opcional)"
              value={espacioData.DescripcionEspacio}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3CrearEspacioContrato" id="formGridCheckbox">
            <Form.Check
              className='TextoCheck'
              type="checkbox"
              label={<p>Al hacer clic acepta nuestras <a href='#'>políticas y condiciones</a>.</p>}
              name="AceptaCondiciones"
              checked={espacioData.AceptaCondiciones}
              onChange={handleChange}
            />
            <div className="errorMensaje">{errorCondiciones}</div>
          </Form.Group>

          <Button variant="outline-primary" type='submit' id='AnadirCrearEspacio'>
            ¡Crear espacio!
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default CrearEspacio;
