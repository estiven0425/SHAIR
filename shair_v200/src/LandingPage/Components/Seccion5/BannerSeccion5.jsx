import React from 'react'; // Importamos la librería de React para crear componentes
import BannerImage from './img5/usuario.jpg'; // Importamos la imagen del banner desde el directorio img5
import './BannerSeccion5.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion5() { // Exportamos una función llamada BannerSeccion5 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion5'> {/* Creamos un div con id BannerSeccion5 que contiene un elemento img */}
      <img src={BannerImage} alt="Usuario SHAIR" /> {/* Creamos un elemento img que renderiza la imagen del banner con el atributo alt "Usuario SHAIR" */}
    </div>
  );
}
