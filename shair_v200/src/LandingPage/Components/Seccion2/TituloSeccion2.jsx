import React from 'react' // Importamos la librería de React para crear componentes
import './TituloSeccion2.css'; // Importamos el archivo de estilos CSS para el componente

export default function TituloSeccion2() { // Exportamos una función llamada TituloSeccion2 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='TituloSeccion2'> {/* Creamos un div con id TituloSeccion2 que contiene un elemento h1 */}
        <h1>¿Quién somos?</h1> {/* Creamos un elemento h1 que renderiza un texto con el mensaje "¿Quién somos?" */}
    </div>
  )
}
