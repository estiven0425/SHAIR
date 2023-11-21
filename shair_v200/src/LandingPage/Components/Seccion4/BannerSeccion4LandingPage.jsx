import React from "react"; // Importamos la librería de React para crear componentes
import IconoImage from "./img4/anunciarse.jpg"; // Importamos la imagen del icono desde el directorio img4
import "./BannerSeccion4LandingPage.css"; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion4LandingPage() {
  // Exportamos una función llamada BannerSeccion4LandingPage que retorna un elemento JSX
  return (
    // Retornamos el contenido JSX del componente
    <div id="BannerSeccion4LandingPage">
      {" "}
      {/* Creamos un div con id BannerSeccion4LandingPage que contiene un elemento img */}
      <img src={IconoImage} alt="Anunciarse SHAIR" />{" "}
      {/* Creamos un elemento img que renderiza la imagen del icono con el atributo alt "Anunciarse SHAIR" */}
    </div>
  );
}
