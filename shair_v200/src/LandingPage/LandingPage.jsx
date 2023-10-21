import React from 'react' /*Importamos librerías de REACT*/
import './LandingPage.css'; /*Importamos los estilos de LandingPage*/
import BarraDeNavegacion from './Components/BarraDeNavegacion'; /*Importamos el componente de la barra de navegación*/
import TituloSeccion1 from './Components/Seccion1/TituloSeccion1';
import BannerSeccion1 from './Components/Seccion1/BannerSeccion1';
import IconoSeccion1 from './Components/Seccion1/IconoSeccion1';
import BotonSeccion1 from './Components/Seccion1/BotonSeccion1'; /*Importamos el botón de la sección 1*/
import TituloSeccion2 from './Components/Seccion2/TituloSeccion2';
import TextoSeccion2 from './Components/Seccion2/TextoSeccion2';
import BannerSeccion2 from './Components/Seccion2/BannerSeccion2';
import BotonSeccion2 from './Components/Seccion2/BotonSeccion2'; /*Importamos el botón de la sección 2*/
import TituloSeccion3 from './Components/Seccion3/TituloSeccion3';
import TextoSeccion3 from './Components/Seccion3/TextoSeccion3';
import TextoSeccion3_1 from './Components/Seccion3/TextoSeccion3_1';
import BannerSeccion3 from './Components/Seccion3/BannerSeccion3';
import BotonSeccion3 from './Components/Seccion3/BotonSeccion3'; /*Importamos el botón de la sección 3*/
import TituloSeccion4 from './Components/Seccion4/TituloSeccion4';
import BannerSeccion4 from './Components/Seccion4/BannerSeccion4';
import BannerSeccion4_1 from './Components/Seccion4/BannerSeccion4_1';
import BotonSeccion4 from './Components/Seccion4/BotonSeccion4'; /*Importamos el botón de la sección 4*/
import BotonSeccion4_1 from './Components/Seccion4/BotonSeccion4_1'; /*Importamos el botón de la sección 4*/

export default function LandingPage() { /*exportamos el componente*/
  return ( /*Contenido HTML del componente*/
      <div id='Principal'>

        <header>
          <BarraDeNavegacion/> {/*Barra de navegación*/}
        </header>

        <body>

          <section id='Seccion1'>
            <div id='Titulo1'>
              <TituloSeccion1/>
            </div>
            <div id='Banner1'>
              <BannerSeccion1/>
            </div>
            <div id='Icono1'>
              <IconoSeccion1/>
            </div>
            <div id='Boton1'>
              <BotonSeccion1/>
            </div>
          </section>

          <section id='Seccion2'>
            <div id='Banner2'>
              <BannerSeccion2/>
            </div>
            <div id='Contenido2'>
              <TituloSeccion2/>
              <TextoSeccion2/>
              <BotonSeccion2/>
            </div>
          </section>

          <section id='Seccion3'>
            <div id='Contenido3'>
              <TituloSeccion3/>
              <div id='Texto3'>
                <TextoSeccion3/>
                <BotonSeccion3/>
                <TextoSeccion3_1/>
              </div>
            </div>
            <div id='Banner3'>
              <BannerSeccion3/>
            </div>
          </section>

          <section id='Seccion4'>
            <TituloSeccion4/>
            <div id='Enlaces'>
              <div id='Anunciarse'>
                <BannerSeccion4/>
                <BotonSeccion4/>
              </div>
              <div id='Catalogo'>
                <BannerSeccion4_1/>
                <BotonSeccion4_1/>
              </div>
            </div>
          </section>

        </body>

      </div>
  )
}
