import React from 'react'; /* Importamos la librería React para crear componentes */
import 'bootstrap/dist/css/bootstrap.min.css'; /* Importamos el archivo CSS de Bootstrap para estilos predefinidos de navegación */
import './BarraDeNavegacion.css'; /* Importamos un archivo de estilos personalizados para la barra de navegación */

export default function BarraDeNavegacion() { /* Definimos un componente funcional llamado BarraDeNavegacion */
  return (   
    <nav class="navbar navbar-expand-lg bg-body-tertiary"> {/* Creamos un elemento de navegación con clases de Bootstrap y una clase personalizada "bg-body-tertiary" */}     
      <div class="container-fluid"> {/* Creamos un contenedor fluido dentro de la barra de navegación */}
        <a class="navbar-brand" href="#">Anuncios</a> {/* Creamos un enlace con la clase "navbar-brand" y texto "Anuncios" */} 
        <a class="navbar-brand" href="#Seccion1">Inicio</a> {/* Creamos otro enlace con la clase "navbar-brand" y texto "Inicio", que redirige a la Sección 1 */}
        <a class="navbar-brand" href="#">Shair | Foro</a> {/* Creamos un tercer enlace con la clase "navbar-brand" y texto "Shair | Foro" */}       
      </div>
    </nav>
  )
}
