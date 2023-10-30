import React from 'react' // Importamos la librería de React para crear componentes
import './TituloSeccion4.css'; // Importamos el archivo de estilos CSS para el componente

export default function TituloSeccion4() { // Exportamos una función llamada TituloSeccion4 que retorna un elemento JSX
  return ( // Retornamos el contenido JSX del componente
    <div id='TituloSeccion4'> {/* Creamos un div con id TituloSeccion4 que contiene un elemento h1 */}
        <h1>¿Qué decidiste?</h1> {/* Creamos un elemento h1 que renderiza un texto con la pregunta "¿Qué decidiste?" */}
    </div>
  )
}
