import React from 'react' // Importamos la librería de React para crear componentes
import BannerImage from './img3/libreria.png'; // Importamos la imagen del banner desde la carpeta img3
import './BannerSeccion3.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion3() { // Exportamos una función llamada BannerSeccion3 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion3'> {/* Creamos un div con id BannerSeccion3 que contiene un elemento img */}
        <img src={BannerImage} alt="Libros SHAIR" /> {/* Le asignamos a la imagen el atributo src con la ruta de la imagen importada y el atributo alt con el texto "Libros SHAIR" para describir la imagen en caso de que no se cargue */}
    </div>
  )
}
