import React from 'react' // Importamos la librería de React para crear componentes
import IconoImage from './img1/logo.png' // Importamos la imagen del icono desde la carpeta img1
import './IconoSeccion1.css'; // Importamos el archivo de estilos CSS para el componente

export default function IconoSeccion1() { // Exportamos una función llamada IconoSeccion1 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='IconoSeccion1'> {/* Creamos un div con id IconoSeccion1 que contiene un elemento img */}
        <img src={IconoImage} alt="Logo SHAIR" /> {/* Le asignamos a la imagen el atributo src con la ruta de la imagen importada y el atributo alt con el texto "Logo SHAIR" para describir la imagen en caso de que no se cargue */}
    </div>
  )
}
