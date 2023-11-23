import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import "./DenunciarCuenta.css";

function DenunciarCuenta() {
  const [motivoDenuncia, setMotivoDenuncia] = useState("");
  const [denunciar, setDenunciar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      DenunciasA: denunciar,
      MotivoDenunciaA: motivoDenuncia,
      AceptaCondiciones: true, // Puedes cambiar esto según tus necesidades
    };

    try {
      const response = await fetch("http://localhost/SHAIR/shair_v200/src/BD_v200/ApiDenunciarCuenta.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        alert("Denuncia realizada con éxito");
      } else {
        alert("Error al denunciar esta cuenta");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div id="DenunciarCuentaPrincipal">
      <div id="FormularioDenunciarCuenta">
        <Form onSubmit={handleSubmit}>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label className="TextoLabel">Motivo de denuncia:</Form.Label>
            <Form.Control
              className="Input"
              type="text"
              value={motivoDenuncia}
              onChange={(e) => setMotivoDenuncia(e.target.value)}
              placeholder="Ingrese el motivo de denunciar"
            />
          </Form.Group>
          <Form.Check
            className="TextoCheck"
            type="checkbox"
            label={<p>Marque esta casilla si desea denunciar esta cuenta.</p>}
            checked={denunciar}
            onChange={() => setDenunciar(!denunciar)}
          />

          <Button variant="outline-primary" type="submit" id="DenunciarCuenta">
            Denunciar cuenta
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default DenunciarCuenta;
