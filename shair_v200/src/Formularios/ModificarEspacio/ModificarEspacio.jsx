import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ModificarEspacio.css";

function ModificarEspacio() {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const navigate = useNavigate();
  const { IdEspacio } = useParams();

  useEffect(() => {
    // Obtener información del espacio para mostrar en los placeholders
    axios
      .get(
        `http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioPropio.php?IdEspacio=${IdEspacio}`
      )
      .then((response) => {
        const espacioData = response.data;
        setNombre(espacioData.NombreEspacio);
        setDescripcion(espacioData.DescripcionEspacio);
      })
      .catch((error) => {
        console.error("Error al obtener datos del espacio:", error);
      });
  }, [IdEspacio]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Lógica para enviar la solicitud PATCH con los datos actualizados
    try {
      const response = await axios.patch(
        `http://localhost/SHAIR/shair_v200/src/BD_v200/ApiModificarEspacio.php`,
        {
          IdEspacio,
          NombreEspacio: nombre,
          DescripcionEspacio: descripcion,
        }
      );

      if (response.data.error) {
        console.error(response.data.message);
      } else {
        console.log(response.data.message);
        // Redirigir a la página deseada después de la actualización
        navigate(`/EspacioPropio/${IdEspacio}`);
      }
    } catch (error) {
      console.error("Error al actualizar el espacio:", error);
    }
  };

  return (
    <div id="ModificarEspacioPrincipal">
      <Form id="FormularioModificarEspacio" onSubmit={handleSubmit}>
        <Form.Group controlId="formGridModificarEspacio">
          <Form.Label className="TextoLabel">Nombre</Form.Label>
          <Form.Control
            className="Input"
            type="text"
            name="Nuevo nombre"
            placeholder={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formGridModificarEspacio">
          <Form.Label className="TextoLabel">Descripción</Form.Label>
          <Form.Control
            className="Input"
            type="Text"
            name="ContraseñaUsuario"
            placeholder={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Button variant="outline-primary" type="submit" id="ModificarEspacio">
          Cambiar
        </Button>
      </Form>
    </div>
  );
}

export default ModificarEspacio;
