import React from 'react' // Importamos la librería de React para crear componentes
import './TextoSeccion2.css'; // Importamos el archivo de estilos CSS para el componente

export default function TextoSeccion2() { // Exportamos una función llamada TextoSeccion2 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='TextoSeccion2'> {/* Creamos un div con id TextoSeccion2 que contiene un elemento p */}
        <p>Somos una plataforma de distribución de software de uso gratuito</p> {/* Creamos un elemento p que renderiza un texto con el mensaje "Somos una plataforma de distribución de software de uso gratuito" */}
    </div>
  )
}
