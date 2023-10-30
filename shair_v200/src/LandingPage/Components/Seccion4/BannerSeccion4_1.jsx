import React from 'react' // Importamos la librería de React para crear componentes
import BannerImage from './img4/catalogo.jpg'; // Importamos la imagen del banner desde el directorio img4
import './BannerSeccion4_1.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion4_1() { // Exportamos una función llamada BannerSeccion4_1 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion4_1'> {/* Creamos un div con id BannerSeccion4_1 que contiene un elemento img */}
        <img src={BannerImage} alt="Catálogo SHAIR" /> {/* Creamos un elemento img que renderiza la imagen del banner con el atributo alt "Catálogo SHAIR" */}
    </div>
  )
}
