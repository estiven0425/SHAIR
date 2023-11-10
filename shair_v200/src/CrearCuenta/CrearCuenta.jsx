import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './CrearCuenta.css';

function CrearCuenta() {
  
  // Usamos el hook useForm de React Hook Form
  const { register, handleSubmit, reset, errors, setValue } = useForm();

  // Creamos un estado para guardar los datos del formulario
  const [DataUser, setDataUser] = useState({
    Nombre: '',
    NombreUsuario: '',
    EmailUsuario: '',
    ContraseñaUsuario: '',
    DescripcionUsuario: ''
  });

  // Creamos una función para manejar el envío del formulario
  const onSubmit = (data) => {
    // Usamos axios para hacer la petición POST al servidor
    axios.post('/usuario', data)
    .then((res) => {
      console.log('Response from server:', res);
      // Resto del código...
    })
    .catch((err) => {
      console.error('Error during submission:', err);
      if (err.response) {
        // La solicitud fue hecha y el servidor respondió con un código de estado fuera del rango 2xx
        console.error('Server responded with status:', err.response.status);
        console.error('Server response data:', err.response.data);
      } else if (err.request) {
        // La solicitud fue hecha pero no se recibió respuesta
        console.error('No response received from server');
      } else {
        // Error durante la configuración de la solicitud
        console.error('Error setting up the request:', err.message);
      }
      // Resto del código...
    });
  };
  // Retornamos el JSX del componente
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>

      <Row className="mb-3CC">

        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Nombre<span>*</span></Form.Label>
          <Form.Control type="text" name="Nombre" laceholder="Ingrese su nombre" {...register('Nombre', { required: true })} onChange={(e) => setValue('Nombre', e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNickName">
          <Form.Label>Nombre de usuario<span>*</span></Form.Label>
          <Form.Control type="text" name="NombreUsuario" laceholder="Ingrese su nombre de usuario" {...register('NombreUsuario', { required: true })} onChange={(e) => setValue('NombreUsuario', e.target.value)}/>
        </Form.Group>

      </Row>

      <Row className="mb-3CC">

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>E-mail<span>*</span></Form.Label>
          <Form.Control type="email" name="EmailUsuario" laceholder="Ingrese su E-mail" {...register('EmailUsuario', { required: true })} onChange={(e) => setValue('EmailUsuario', e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Contraseña<span>*</span></Form.Label>
          <Form.Control type="password" name="ContraseñaUsuario" laceholder="Ingrese su contraseña" {...register('ContraseñaUsuario', { required: true })} onChange={(e) => setValue('ContraseñaUsuario', e.target.value)}/>
        </Form.Group>

      </Row>

      <Form.Group className="mb-3CC" controlId="formGridDescription">
        <Form.Label>Descripción</Form.Label>
        <Form.Control name="DescripcionUsuario" placeholder="Ingrese una descrición (Opcional)" {...register('DescripcionUsuario')} />
      </Form.Group>

      <Form.Group className="mb-3CC" id="formGridCheckboxCC">
        <Form.Check type="checkbox" label={<a href='#'>Al hacer click acepta nuestras políticas y condiciondes</a>}/>
      </Form.Group>

      <Button variant="primary" type="submit" id='BotonCC'>
        Unirte a SHAIR
      </Button>

    </Form>
  );
}

export default CrearCuenta;
