import React from 'react'; /* Importamos la librería React para crear componentes */
import 'bootstrap/dist/css/bootstrap.min.css'; /* Importamos el archivo CSS de Bootstrap para estilos predefinidos de navegación */
import './BarraDeNavegacionLandingPage.css'; /* Importamos un archivo de estilos personalizados para la barra de navegación */

export default function BarraDeNavegacionLandingPage() { /* Definimos un componente funcional llamado BarraDeNavegacionLandingPage */
  return (   
    <nav className="navbar navbar-expand-lg bg-body-tertiary-LandingPage"> {/* Creamos un elemento de navegación con clases de Bootstrap y una clase personalizada "bg-body-tertiary" */}     
      <div className="container-fluid"> {/* Creamos un contenedor fluido dentro de la barra de navegación */}
        <a className="navbar-brand" href="#">Anuncios</a> {/* Creamos un enlace con la clase "navbar-brand" y texto "Anuncios" */} 
        <a className="navbar-brand" href="#Seccion1LandingPage">Inicio</a> {/* Creamos otro enlace con la clase "navbar-brand" y texto "Inicio", que redirige a la Sección 1 */}
        <a className="navbar-brand" href='/Home'>Shair | Foro</a> {/* Creamos un tercer enlace con la clase "navbar-brand" y texto "Shair | Foro" */}
      </div>
    </nav>
  )
}
