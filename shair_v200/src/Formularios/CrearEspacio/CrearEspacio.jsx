import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './CrearEspacio.css';

function CrearEspacio() {
  return (
    <div id='CrearEspacioPrincipal'>
      <div id='FormularioCrearEspacio'>
      <Row className="mb-3CrearEspacioNombres">
        <Form.Group as={Col} controlId="formGridName">
        <Form.Label className='TextoLabel'>Nombre del espacio</Form.Label>
         <Form.Control className='Input' type="text" name="NombreEspacio" placeholder="Ingrese el nombre del espacio"/>
         </Form.Group>
      </Row>

      <Form.Group className="mb-3CrearEspacioDescripcion" controlId="formGridDescription">
        <Form.Label className='TextoLabel'>Descripción</Form.Label>
        <Form.Control className='Input' type='text' name='DescripcionEspacio' placeholder="Ingrese una descripción (opcional)"/>
      </Form.Group>

      <Form.Group className="mb-3CrearEspacioContrato" id="formGridCheckbox">
        <Form.Check
          className='TextoCheck'
          type="checkbox"
          label={<p>Al hacer clic acepta nuestras <a href='#'>políticas y condiciones</a>.</p>}
          name="AceptaCondiciones"
        />
      </Form.Group>

        <Button variant="outline-primary" type='submit' id='AnadirCrearEspacio'>
          ¡Crear espacio!
        </Button>
      </div>
    </div>
  );
}

export default CrearEspacio;
