import React from 'react'; /* Importamos la librería React para crear componentes */

import './UbicacionLandingPage.css'; /* Importamos un archivo de estilos personalizados para el componente UbicacionLandingPage */

export default function UbicacionLandingPage() {
  return ( /* Definimos un componente funcional llamado UbicacionLandingPage */
    <div id='UbicacionLandingPage'> {/* Creamos un contenedor con el ID "UbicacionLandingPage" que contiene el contenido */}
      <h1>Ubicación</h1> {/* Agregamos un encabezado con el texto "Ubicación" */}
      <a href="https://maps.app.goo.gl/VfbYtHK7NNEF8Xp1A" target="_blank" rel="noopener noreferrer"> {/* Agregamos un enlace que abre un mapa de Medellín en una nueva ventana/tabla (_blank) */}
        Medellín
      </a>
      <a href="https://www.google.com/maps/place/Colombia/@4.6365816,-79.6352388,6z/data=!3m1!4b1!4m6!3m5!1s0x8e15a43aae1594a3:0x9a0d9a04eff2a340!8m2!3d4.570868!4d-74.297333!16zL20vMDFsczI?entry=ttu" target="_blank" rel="noopener noreferrer"> {/* Agregamos otro enlace que abre un mapa de Colombia en una nueva ventana/tabla (_blank) */}
        Colombia
      </a>
    </div>
  )
}
