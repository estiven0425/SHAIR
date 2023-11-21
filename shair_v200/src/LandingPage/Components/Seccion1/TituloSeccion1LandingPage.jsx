import React from "react"; // Importamos la librería de React para crear componentes
import "./TituloSeccion1LandingPage.css"; // Importamos el archivo de estilos CSS para el componente

export default function TituloSeccion1LandingPage() {
  // Exportamos una función llamada TituloSeccion1LandingPage que retorna un elemento JSX
  return (
    // Retornamos el contenido JSX del componente
    <div id="TituloSeccion1LandingPage">
      {" "}
      {/*} Creamos un div con id TituloSeccion1LandingPage que contiene un elemento h1 */}
      <h1>Bienvenido a SHAIR</h1>{" "}
      {/* Creamos un elemento h1 que renderiza un texto con el mensaje "Bienvenido a SHAIR" */}
    </div>
  );
}
