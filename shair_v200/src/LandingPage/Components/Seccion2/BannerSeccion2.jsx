import React from 'react' // Importamos la librería de React para crear componentes
import BannerImage from './img2/logo.png'; // Importamos la imagen del banner desde la carpeta img2
import './BannerSeccion2.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion2() { // Exportamos una función llamada BannerSeccion2 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion2'> {/*} Creamos un div con id BannerSeccion2 que contiene un elemento img */}
        <img src={BannerImage} alt="Logo SHAIR" /> {/*} Le asignamos a la imagen el atributo src con la ruta de la imagen importada y el atributo alt con el texto "Logo SHAIR" para describir la imagen en caso de que no se cargue */}
    </div>
  )
}
