import React from 'react'; /* Importamos la librería React para crear componentes */
import './BarraFooter.css'; /* Importamos un archivo de estilos personalizados para la barra de pie de página */
import Ubicacion from './Components/Ubicacion';
import Contacto from './Components/Contacto';
import MasInformacion from './Components/MasInformacion';
import CondicionesdeServicio from './Components/CondicionesdeServicio';
import Dueño from './Components/Dueño';
/* Importamos componentes desde ubicaciones específicas */

export default function BarraFooter() {
  return ( /* Definimos un componente funcional llamado BarraFooter */
    <div id='BarraFooter'> {/* Creamos un contenedor con el ID "BarraFooter" que contiene dos secciones */}
      <div id='Informacion'> {/* Sección de información que incluye varios componentes importados */}
        <Ubicacion />
        <Contacto />
        <MasInformacion />
        <CondicionesdeServicio />
      </div>
      <div id='Derechos'> {/* Sección de derechos que incluye el componente "Dueño" */}
        <Dueño />
      </div>
    </div>
  );
}
