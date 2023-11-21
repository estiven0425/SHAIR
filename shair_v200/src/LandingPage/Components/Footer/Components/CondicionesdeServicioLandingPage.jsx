import React from "react"; /* Importamos la librería React para crear componentes */
import "./CondicionesdeServicioLandingPage.css"; /* Importamos un archivo de estilos personalizados para el componente CondicionesdeServicio */

export default function CondicionesdeServicioLandingPage() {
  return (
    /* Definimos un componente funcional llamado CondicionesdeServicio */
    <div id="CondicionesdeServicioLandingPage">
      {" "}
      {/* Creamos un contenedor con el ID "CondicionesdeServicio" que contiene el contenido */}
      <h1>Condiciones de Servicio</h1>{" "}
      {/* Agregamos un encabezado con el texto "Condiciones de Servicio" */}
      <a href="#" target="_blank" rel="noopener noreferrer">
        Políticas y condiciones de servicio
      </a>{" "}
      {/* Agregamos un enlace con texto "Políticas y condiciones de servicio" que se abre en una nueva ventana/tabla (_blank) */}
      <a href="#" target="_blank" rel="noopener noreferrer">
        Contrato de membresía
      </a>{" "}
      {/* Agregamos otro enlace con texto "Contrato de membresía" que se abre en una nueva ventana/tabla (_blank) */}
      <a href="#" target="_blank" rel="noopener noreferrer">
        Contrato de anunciante
      </a>{" "}
      {/* Agregamos un tercer enlace con texto "Contrato de anunciante" que se abre en una nueva ventana/tabla (_blank) */}
    </div>
  );
}
