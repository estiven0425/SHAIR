import React from 'react' // Importamos la librería de React para crear componentes
import './LandingPage.css'; // Importamos el archivo de estilos CSS para la página principal
import BarraDeNavegacion from './Components/Header/BarraDeNavegacion'; // Importamos el componente de la barra de navegación
import TituloSeccion1 from './Components/Seccion1/TituloSeccion1';
import BannerSeccion1 from './Components/Seccion1/BannerSeccion1';
import IconoSeccion1 from './Components/Seccion1/IconoSeccion1';
import BotonSeccion1 from './Components/Seccion1/BotonSeccion1'; // Importamos los componentes de la sección 1
import TituloSeccion2 from './Components/Seccion2/TituloSeccion2';
import TextoSeccion2 from './Components/Seccion2/TextoSeccion2';
import BannerSeccion2 from './Components/Seccion2/BannerSeccion2';
import BotonSeccion2 from './Components/Seccion2/BotonSeccion2'; // Importamos los componentes de la sección 2
import TituloSeccion3 from './Components/Seccion3/TituloSeccion3';
import TextoSeccion3 from './Components/Seccion3/TextoSeccion3';
import TextoSeccion3_1 from './Components/Seccion3/TextoSeccion3_1';
import BannerSeccion3 from './Components/Seccion3/BannerSeccion3';
import BotonSeccion3 from './Components/Seccion3/BotonSeccion3'; // Importamos los componentes de la sección 3
import TituloSeccion4 from './Components/Seccion4/TituloSeccion4';
import BannerSeccion4 from './Components/Seccion4/BannerSeccion4';
import BannerSeccion4_1 from './Components/Seccion4/BannerSeccion4_1';
import BotonSeccion4 from './Components/Seccion4/BotonSeccion4'; // Importamos los componentes de la sección 4
import BotonSeccion4_1 from './Components/Seccion4/BotonSeccion4_1'; // Importamos el componente del botón de la subsección 4_1
import BannerSeccion5 from './Components/Seccion5/BannerSeccion5';
import BannerSeccion5_1 from './Components/Seccion5/BannerSeccion5_1';
import BannerSeccion5_2 from './Components/Seccion5/BannerSeccion5_2';
import TituloSeccion5 from './Components/Seccion5/TituloSeccion5';
import BotonSeccion5 from './Components/Seccion5/BotonSeccion5'; // Importamos los componentes de la sección 5
import BarraFooter from './Components/Footer/BarraFooter'; // Importamos el componente del pie de página

export default function LandingPage() { // Exportamos el componente principal de la página web
  return ( // Retornamos el contenido HTML del componente

    <div id='PrincipalLandingPage'> {/* Creamos un div que contiene toda la página */}

      <header> {/* Creamos un elemento header para el encabezado de la página */}
        <BarraDeNavegacion/> {/* Insertamos el componente de la barra de navegación */}
      </header>

      <body> {/* Creamos un elemento body para el cuerpo de la página */}

        <section id='Seccion1LandingPage'> {/* Creamos un elemento section para la primera sección de la página */}

          <div id='Titulo1'> {/* Creamos un div para el título de la sección 1 */}
            <TituloSeccion1/> {/* Insertamos el componente del título de la sección 1 */}
          </div>
          <div id='Banner1'> {/* Creamos un div para el banner de la sección 1 */}
            <BannerSeccion1/> {/* Insertamos el componente del banner de la sección 1 */}
          </div>
          <div id='Icono1'> {/* Creamos un div para el icono de la sección 1 */}
            <IconoSeccion1/> {/* Insertamos el componente del icono de la sección 1 */}
          </div>
          <div id='Boton1'> {/* Creamos un div para el botón de la sección 1 */}
            <BotonSeccion1/> {/* Insertamos el componente del botón de la sección 1 */}
          </div>

        </section>

        <section id='Seccion2LandingPage'> {/* Creamos un elemento section para la segunda sección de la página */}

          <div id='Banner2'> {/* Creamos un div para el banner de la sección 2 */}
            <BannerSeccion2/> {/* Insertamos el componente del banner de la sección 2 */}
          </div>
          <div id='Contenido2'> {/* Creamos un div para el contenido de la sección 2 */}
            <TituloSeccion2/> {/* Insertamos el componente del título de la sección 2 */}
            <TextoSeccion2/> {/* Insertamos el componente del texto de la sección 2 */}
            <BotonSeccion2/> {/* Insertamos el componente del botón de la sección 2 */}
          </div>

        </section>

        <section id='Seccion3LandingPage'> {/* Creamos un elemento section para la tercera sección de la página */}

          <div id='Contenido3'> {/* Creamos un div para el contenido de la sección 3 */}

            <TituloSeccion3/> {/* Insertamos el componente del título de la sección 3 */}

            <div id='Texto3'> {/* Creamos un div para el texto de la sección 3 */}
              <TextoSeccion3/> {/* Insertamos el componente del texto de la sección 3 */}
              <BotonSeccion3/> {/* Insertamos el componente del botón de la sección 3 */}
              <TextoSeccion3_1/> {/* Insertamos el componente del texto adicional de la sección 3 */}
            </div>

          </div>

          <div id='Banner3'> {/* Creamos un div para el banner de la sección 3 */}
            <BannerSeccion3/> {/* Insertamos el componente del banner de la sección 3 */}
          </div>

        </section>

        <section id='Seccion4LandingPage'> {/* Creamos un elemento section para la cuarta sección de la página */}

          <TituloSeccion4/> {/* Insertamos el componente del título de la sección 4 */}

          <div id='Enlaces'> {/* Creamos un div para los enlaces de la sección 4 */}
            
            <div id='Anunciarse'> {/* Creamos un div para el enlace de anunciarse */}
              <BannerSeccion4/> {/* Insertamos el componente del banner de anunciarse */}
              <BotonSeccion4/> {/* Insertamos el componente del botón de anunciarse */}
            </div>

            <div id='Catalogo'> {/* Creamos un div para el enlace del catálogo */}
              <BannerSeccion4_1/> {/* Insertamos el componente del banner del catálogo */}
              <BotonSeccion4_1/> {/* Insertamos el componente del botón del catálogo */}
            </div>

          </div>

        </section>

        <section id='Seccion5LandingPage'> {/* Creamos un elemento section para la quinta sección de la página */}
          
          <div id='Fondos'> {/* Creamos un div para los fondos de la sección 5 */}
            <BannerSeccion5/> {/* Insertamos el componente del primer fondo de la sección 5 */}
            <BannerSeccion5_1/> {/* Insertamos el componente del segundo fondo de la sección 5 */}
          </div>

          <div id='Final'> {/* Creamos un div para el final de la sección 5 */}
            <BannerSeccion5_2/> {/* Insertamos el componente del tercer fondo de la sección 5 */}
            <TituloSeccion5/> {/* Insertamos el componente del título de la sección 5 */}
            <BotonSeccion5/> {/* Insertamos el componente del botón de la sección 5 */}
          </div>

        </section>

        <footer> {/* Creamos un elemento footer para el pie de página */}
          <BarraFooter/> {/* Insertamos el componente de la barra del pie de página */}
        </footer>

      </body>

  </div>
  
  )
}
