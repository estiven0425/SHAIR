import React from 'react'; // Importamos la librería de React para crear componentes
import BannerImage from './img5/logo.png'; // Importamos la imagen del banner desde el directorio img5
import './BannerSeccion5_1.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion5_1() { // Exportamos una función llamada BannerSeccion5_1 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion5_1'> {/* Creamos un div con id BannerSeccion5_1 que contiene un elemento img */}
      <img src={BannerImage} alt="Logo SHAIR" /> {/* Creamos un elemento img que renderiza la imagen del banner con el atributo alt "Logo SHAIR" */}
    </div>
  );
}
