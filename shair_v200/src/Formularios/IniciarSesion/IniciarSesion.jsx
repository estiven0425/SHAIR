import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import './IniciarSesion.css';

function IniciarSesion() {
  return (
    <div id='IniciarSesionPrincipal'>
      <Form id='FormularioIniciarSesion'>

              <Form.Group as={Col} controlId="formGridEmailIniciarSesion">
                <Form.Label className='TextoLabel'>E-mail</Form.Label>
                <Form.Control className='Input' type="email" name='EmailUsuarioIniciarSesion' placeholder="Ingrese su e-mail"/>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridPasswordIniciarSesion">
                <Form.Label className='TextoLabel'>Contraseña</Form.Label>
                <Form.Control className='Input' type="password" name='ContraseñaUsuarioIniciarSesion' placeholder="Ingrese su contraseña"/>
              </Form.Group>

            <Button variant="outline-primary" type='submit' id='AccederIniciarSesion'>
              Iniciar Sesion
            </Button>
      </Form>
    </div>
  );
}

export default IniciarSesion;
