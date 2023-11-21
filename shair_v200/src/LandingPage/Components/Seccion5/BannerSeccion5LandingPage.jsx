import React from "react"; // Importamos la librería de React para crear componentes
import BannerImage from "./img5/usuario.jpg"; // Importamos la imagen del banner desde el directorio img5
import "./BannerSeccion5LandingPage.css"; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion5LandingPage() {
  // Exportamos una función llamada BannerSeccion5LandingPage que retorna un elemento JSX
  return (
    // Retornamos el contenido JSX del componente
    <div id="BannerSeccion5LandingPage">
      {" "}
      {/* Creamos un div con id BannerSeccion5LandingPage que contiene un elemento img */}
      <img src={BannerImage} alt="Usuario SHAIR" />{" "}
      {/* Creamos un elemento img que renderiza la imagen del banner con el atributo alt "Usuario SHAIR" */}
    </div>
  );
}
