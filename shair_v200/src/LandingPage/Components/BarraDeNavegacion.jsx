import React from 'react' /*Importamos librerías de REACT*/
import 'bootstrap/dist/css/bootstrap.min.css'; /*Importamos librerías de BOOTSTRAP*/
import './BarraDeNavegacion.css';

export default function BarraDeNavegacion() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Anuncios</a>
            <a class="navbar-brand" href="#">Inicio</a>
            <a class="navbar-brand" href="#">Shair | Foro</a>
        </div>
    </nav>
  )
}
