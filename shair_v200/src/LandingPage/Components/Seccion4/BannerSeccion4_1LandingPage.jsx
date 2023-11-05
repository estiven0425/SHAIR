import React from 'react' // Importamos la librería de React para crear componentes
import BannerImage from './img4/catalogo.jpg'; // Importamos la imagen del banner desde el directorio img4
import './BannerSeccion4_1LandingPage.css'; // Importamos el archivo de estilos CSS para el componente

export default function BannerSeccion4_1LandingPage() { // Exportamos una función llamada BannerSeccion4_1LandingPage que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='BannerSeccion4_1LandingPage'> {/* Creamos un div con id BannerSeccion4_1LandingPage que contiene un elemento img */}
        <img src={BannerImage} alt="Catálogo SHAIR" /> {/* Creamos un elemento img que renderiza la imagen del banner con el atributo alt "Catálogo SHAIR" */}
    </div>
  )
}
