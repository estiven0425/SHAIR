import React from 'react' /*Importamos librerías de REACT*/
import BarraDeNavegacion from './Components/BarraDeNavegacion'; /*Importamos el componente de la barra de navegación*/
import './LandingPage.css'; /*Importamos los estilos de LandingPage*/
import BotonSeccion1 from './Components/BotonSeccion1';

export default function LandingPage() { /*exportamos el componente*/
  return ( /*Contenido HTML del componente*/
      <div id='Principal'>
        <header>
          <BarraDeNavegacion/> {/*Barra de navegación*/}
        </header>

        <body>
          <section id='Section1'>
            <h1>Bienvenido a SHAIR</h1>
            <BotonSeccion1/>
          </section>
        </body>
      </div>
  )
}
