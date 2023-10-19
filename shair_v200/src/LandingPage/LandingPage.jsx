import React from 'react' /*Importamos librerías de REACT*/
import BarraDeNavegacion from './Components/BarraDeNavegacion'; /*Importamos el componente de la barra de navegación*/
import Banner from './Components/Seccion1/Banner';
import BotonSeccion1 from './Components/Seccion1/BotonSeccion1'; /*Importamos el botón de la sección 1*/
import './LandingPage.css'; /*Importamos los estilos de LandingPage*/
import Titulo from './Components/Seccion1/Titulo';
import Icono from './Components/Seccion1/Icono';

export default function LandingPage() { /*exportamos el componente*/
  return ( /*Contenido HTML del componente*/
      <div id='Principal'>

        <header>
          <BarraDeNavegacion/> {/*Barra de navegación*/}
        </header>

        <body>

          <section id='Section1'>
            <div id='TituloSeccion1'>
              <Titulo/>
            </div>
            <div id='BannerSeccion1'>
              <Banner/>
            </div>
            <div id='IconoSeccion1'>
              <Icono/>
            </div>
            <div id='BotonSeccion1'>
              <BotonSeccion1/>
            </div>
          </section>

        </body>

      </div>
  )
}
