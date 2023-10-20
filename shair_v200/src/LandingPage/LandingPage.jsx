import React from 'react' /*Importamos librerías de REACT*/
import BarraDeNavegacion from './Components/BarraDeNavegacion'; /*Importamos el componente de la barra de navegación*/
import Titulo1 from './Components/Seccion1/Titulo1';
import Banner1 from './Components/Seccion1/Banner';
import Icono1 from './Components/Seccion1/Icono1';
import BotonSeccion1 from './Components/Seccion1/BotonSeccion1'; /*Importamos el botón de la sección 1*/
import './LandingPage.css'; /*Importamos los estilos de LandingPage*/
import Titulo2 from './Components/Seccion2/Titulo2';
import Texto2 from './Components/Seccion2/Texto2';
import Banner2 from './Components/Seccion2/Banner2';
import BotonSeccion2 from './Components/Seccion2/BotonSeccion2'; /*Importamos el botón de la sección 1*/

export default function LandingPage() { /*exportamos el componente*/
  return ( /*Contenido HTML del componente*/
      <div id='Principal'>

        <header>
          <BarraDeNavegacion/> {/*Barra de navegación*/}
        </header>

        <body>

          <section id='Seccion1'>
            <div id='TituloSeccion1'>
              <Titulo1/>
            </div>
            <div id='BannerSeccion1'>
              <Banner1/>
            </div>
            <div id='IconoSeccion1'>
              <Icono1/>
            </div>
            <div id='BotonSeccion1'>
              <BotonSeccion1/>
            </div>
          </section>

          <section id='Seccion2'>
            <div id='BannerSeccion2'>
              <Banner2/>
            </div>
            <div id='Contenido2'>
              <Titulo2/>
              <Texto2/>
              <BotonSeccion2/>
            </div>
          </section>

        </body>

      </div>
  )
}
