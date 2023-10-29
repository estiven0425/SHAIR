import React from 'react' // Importamos la librería de React para crear componentes
import BannerImage from './img1/banner.png'; // Importamos la imagen del banner desde la carpeta img1
import './BannerSeccion1.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion1() { // Exportamos una función llamada BannerSeccion1 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion1'> {/* Creamos un div con id BannerSeccion1 que contiene un elemento img */}
        <img src={BannerImage} alt="Banner SHAIR" /> {/* Le asignamos a la imagen el atributo src con la ruta de la imagen importada y el atributo alt con el texto "Banner SHAIR" para describir la imagen en caso de que no se cargue */}
    </div>
  )
}
