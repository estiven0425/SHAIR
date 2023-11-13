import React from 'react' // Importamos la librería de React para crear componentes
import './LandingPage.css'; // Importamos el archivo de estilos CSS para la página principal
import BarraDeNavegacionLandingPage from './Components/Header/BarraDeNavegacionLandingPage'; // Importamos el componente de la barra de navegación
import TituloSeccion1LandingPage from './Components/Seccion1/TituloSeccion1LandingPage'; // Importamos los componentes de la sección 1
import BannerSeccion1LandingPage from './Components/Seccion1/BannerSeccion1LandingPage'; // Importamos los componentes de la sección 1
import IconoSeccion1LandingPage from './Components/Seccion1/IconoSeccion1LandingPage'; // Importamos los componentes de la sección 1
import BotonSeccion1LandingPage from './Components/Seccion1/BotonSeccion1LandingPage'; // Importamos los componentes de la sección 1
import TituloSeccion2LandingPage from './Components/Seccion2/TituloSeccion2LandingPage'; // Importamos los componentes de la sección 2
import TextoSeccion2LandingPage from './Components/Seccion2/TextoSeccion2LandingPage'; // Importamos los componentes de la sección 2
import BannerSeccion2LandingPage from './Components/Seccion2/BannerSeccion2LandingPage'; // Importamos los componentes de la sección 2
import BotonSeccion2LandingPage from './Components/Seccion2/BotonSeccion2LandingPage'; // Importamos los componentes de la sección 2
import TituloSeccion3LandingPage from './Components/Seccion3/TituloSeccion3LandingPage'; // Importamos los componentes de la sección 3
import TextoSeccion3LandingPage from './Components/Seccion3/TextoSeccion3LandingPage'; // Importamos los componentes de la sección 3
import TextoSeccion3_1LandingPage from './Components/Seccion3/TextoSeccion3_1LandingPage'; // Importamos los componentes de la sección 3
import BannerSeccion3LandingPage from './Components/Seccion3/BannerSeccion3LandingPage'; // Importamos los componentes de la sección 3
import BotonSeccion3LandingPage from './Components/Seccion3/BotonSeccion3LandingPage'; // Importamos los componentes de la sección 3
import TituloSeccion4LandingPage from './Components/Seccion4/TituloSeccion4LandingPage'; // Importamos los componentes de la sección 4
import BannerSeccion4LandingPage from './Components/Seccion4/BannerSeccion4LandingPage'; // Importamos los componentes de la sección 4
import BannerSeccion4_1LandingPage from './Components/Seccion4/BannerSeccion4_1LandingPage'; // Importamos el componente del botón de la subsección 4_1
import BotonSeccion4LandingPage from './Components/Seccion4/BotonSeccion4LandingPage'; // Importamos los componentes de la sección 4
import BotonSeccion4_1LandingPage from './Components/Seccion4/BotonSeccion4_1LandingPage'; // Importamos el componente del botón de la subsección 4_1
import BannerSeccion5LandingPage from './Components/Seccion5/BannerSeccion5LandingPage'; // Importamos los componentes de la sección 5
import BannerSeccion5_1LandingPage from './Components/Seccion5/BannerSeccion5_1LandingPage'; // Importamos el componente del botón de la subsección 5_1
import BannerSeccion5_2LandingPage from './Components/Seccion5/BannerSeccion5_2LandingPage'; // Importamos el componente del botón de la subsección 5_2
import TituloSeccion5LandingPage from './Components/Seccion5/TituloSeccion5LandingPage'; // Importamos los componentes de la sección 5
import BotonSeccion5LandingPage from './Components/Seccion5/BotonSeccion5LandingPage'; // Importamos los componentes de la sección 5
import BarraFooterLandingPage from './Components/Footer/BarraFooterLandingPage'; // Importamos el componente del pie de página

export default function LandingPage() { // Exportamos el componente principal de la página web
  return ( // Retornamos el contenido HTML del componente

    <div id='PrincipalLandingPage'> {/* Creamos un div que contiene toda la página */}

      <header> {/* Creamos un elemento header para el encabezado de la página */}
        <BarraDeNavegacionLandingPage/> {/* Insertamos el componente de la barra de navegación */}
      </header>

      <div id='bodyLandingPage'> {/* Creamos un elemento div para el cuerpo de la página */}

        <section id='Seccion1LandingPage'> {/* Creamos un elemento section para la primera sección de la página */}

          <div id='Titulo1LandingPage'> {/* Creamos un div para el título de la sección 1 */}
            <TituloSeccion1LandingPage/> {/* Insertamos el componente del título de la sección 1 */}
          </div>
          <div id='Banner1LandingPage'> {/* Creamos un div para el banner de la sección 1 */}
            <BannerSeccion1LandingPage/> {/* Insertamos el componente del banner de la sección 1 */}
          </div>
          <div id='Icono1LandingPage'> {/* Creamos un div para el icono de la sección 1 */}
            <IconoSeccion1LandingPage/> {/* Insertamos el componente del icono de la sección 1 */}
          </div>
          <div id='Boton1LandingPage'> {/* Creamos un div para el botón de la sección 1 */}
            <BotonSeccion1LandingPage/> {/* Insertamos el componente del botón de la sección 1 */}
          </div>

        </section>

        <section id='Seccion2LandingPage'> {/* Creamos un elemento section para la segunda sección de la página */}

          <div id='Banner2LandingPage'> {/* Creamos un div para el banner de la sección 2 */}
            <BannerSeccion2LandingPage/> {/* Insertamos el componente del banner de la sección 2 */}
          </div>
          <div id='Contenido2LandingPage'> {/* Creamos un div para el contenido de la sección 2 */}
            <TituloSeccion2LandingPage/> {/* Insertamos el componente del título de la sección 2 */}
            <TextoSeccion2LandingPage/> {/* Insertamos el componente del texto de la sección 2 */}
            <BotonSeccion2LandingPage/> {/* Insertamos el componente del botón de la sección 2 */}
          </div>

        </section>

        <section id='Seccion3LandingPage'> {/* Creamos un elemento section para la tercera sección de la página */}

          <div id='Contenido3LandingPage'> {/* Creamos un div para el contenido de la sección 3 */}

            <TituloSeccion3LandingPage/> {/* Insertamos el componente del título de la sección 3 */}

            <div id='Texto3LandingPage'> {/* Creamos un div para el texto de la sección 3 */}
              <TextoSeccion3LandingPage/> {/* Insertamos el componente del texto de la sección 3 */}
              <BotonSeccion3LandingPage/> {/* Insertamos el componente del botón de la sección 3 */}
              <TextoSeccion3_1LandingPage/> {/* Insertamos el componente del texto adicional de la sección 3 */}
            </div>

          </div>

          <div id='Banner3LandingPage'> {/* Creamos un div para el banner de la sección 3 */}
            <BannerSeccion3LandingPage/> {/* Insertamos el componente del banner de la sección 3 */}
          </div>

        </section>

        <section id='Seccion4LandingPage'> {/* Creamos un elemento section para la cuarta sección de la página */}

          <TituloSeccion4LandingPage/> {/* Insertamos el componente del título de la sección 4 */}

          <div id='EnlacesLandingPage'> {/* Creamos un div para los enlaces de la sección 4 */}
            
            <div id='AnunciarseLandingPage'> {/* Creamos un div para el enlace de anunciarse */}
              <BannerSeccion4LandingPage/> {/* Insertamos el componente del banner de anunciarse */}
              <BotonSeccion4LandingPage/> {/* Insertamos el componente del botón de anunciarse */}
            </div>

            <div id='CatalogoLandingPage'> {/* Creamos un div para el enlace del catálogo */}
              <BannerSeccion4_1LandingPage/> {/* Insertamos el componente del banner del catálogo */}
              <BotonSeccion4_1LandingPage/> {/* Insertamos el componente del botón del catálogo */}
            </div>

          </div>

        </section>

        <section id='Seccion5LandingPage'> {/* Creamos un elemento section para la quinta sección de la página */}
          
          <div id='FondosLandingPage'> {/* Creamos un div para los fondos de la sección 5 */}
            <BannerSeccion5LandingPage/> {/* Insertamos el componente del primer fondo de la sección 5 */}
            <BannerSeccion5_1LandingPage/> {/* Insertamos el componente del segundo fondo de la sección 5 */}
          </div>

          <div id='FinalLandingPage'> {/* Creamos un div para el final de la sección 5 */}
            <BannerSeccion5_2LandingPage/> {/* Insertamos el componente del tercer fondo de la sección 5 */}
            <TituloSeccion5LandingPage/> {/* Insertamos el componente del título de la sección 5 */}
            <BotonSeccion5LandingPage/> {/* Insertamos el componente del botón de la sección 5 */}
          </div>

        </section>

        <footer> {/* Creamos un elemento footer para el pie de página */}
          <BarraFooterLandingPage/> {/* Insertamos el componente de la barra del pie de página */}
        </footer>

      </div>

  </div>
  
  )
}
