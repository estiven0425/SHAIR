import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../BD_v200/AuthContext';
import './ModificarCuenta.css';

function ModificarCuenta() {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const navigate = useNavigate();
  const { IdUsuario } = useParams();

  useEffect(() => {
    // Obtener información del Usuario para mostrar en los placeholders
    axios.get(`http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerUsuarioPropio.php?IdUsuario=${IdUsuario}`)
      .then(response => {
        const UsuarioData = response.data;
        setNombre(UsuarioData.NombreUsuario);
        setDescripcion(UsuarioData.DescripcionUsuario);
      })
      .catch(error => {
        console.error('Error al obtener datos del Usuario:', error);
      });
  }, [IdUsuario]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar la solicitud PATCH con los datos actualizados
    try {
      const response = await axios.patch(`http://localhost/SHAIR/shair_v200/src/BD_v200/ApiModificarCuenta.php`, {
        IdUsuario,
        NombreUsuario: nombre,
        DescripcionUsuario: descripcion,
      });

      if (response.data.error) {
        console.error(response.data.message);
      } else {
        console.log(response.data.message);
        // Redirigir a la página deseada después de la actualización
        navigate(`/UsuarioPropio/${IdUsuario}`);
      }
    } catch (error) {
      console.error('Error al actualizar el Usuario:', error);
    }
  };

  return (
    <div id='ModificarCuentaPrincipal'>
      <Form id='FormularioModificarCuenta' onSubmit={handleSubmit}>
        <Form.Group controlId="formGridModificarCuenta">
          <Form.Label className='TextoLabel'>Nombre</Form.Label>
          <Form.Control
            className='Input'
            type="text"
            name='Nuevo nombre'
            placeholder={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGridModificarCuenta">
          <Form.Label className='TextoLabel'>Descripción</Form.Label>
          <Form.Control
            className='Input'
            type="Text"
            name='DescripcionUsuario'
            placeholder={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Button variant="outline-primary" type='submit' id='ModificarCuenta'>
          Cambiar
        </Button>
      </Form>
    </div>
  );
}

export default ModificarCuenta;
