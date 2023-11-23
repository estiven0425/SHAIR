import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./EliminarCuenta.css";

function EliminarCuenta() {
  return (
    <div id="EliminarCuentaPrincipal">
      <div id="FormularioEliminarCuenta">
        <Form>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="TextoLabel">Motivo de eliminación:</Form.Label>
            <Form.Control
              className="Input"
              type="text"
              name="MotivoEliminacion"
              placeholder="Ingrese el motivo de eliminación"
            />
          </Form.Group>
          <Form.Check
            className="TextoCheck"
            type="checkbox"
            label={<p>Marque esta casilla si desea eliminar su cuenta.</p>}
            name="Eliminar"
          />

          <Button variant="outline-primary" type="submit" id="EliminarCuenta">
            Eliminar cuenta
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EliminarCuenta;
