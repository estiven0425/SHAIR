import React from "react"; /* Importamos la librería React para crear componentes */
import "./BarraFooterLandingPage.css"; /* Importamos un archivo de estilos personalizados para la barra de pie de página */
import UbicacionLandingPage from "./Components/UbicacionLandingPage";
import ContactoLandingPage from "./Components/ContactoLandingPage";
import MasInformacionLandingPage from "./Components/MasInformacionLandingPage";
import CondicionesdeServicioLandingPage from "./Components/CondicionesdeServicioLandingPage";
import DueñoLandingPage from "./Components/DueñoLandingPage";
/* Importamos componentes desde ubicaciones específicas */

export default function BarraFooterLandingPage() {
  return (
    /* Definimos un componente funcional llamado BarraFooterLandingPage */
    <div id="BarraFooterLandingPage">
      {" "}
      {/* Creamos un contenedor con el ID "BarraFooterLandingPage" que contiene dos secciones */}
      <div id="InformacionLandingPage">
        {" "}
        {/* Sección de información que incluye varios componentes importados */}
        <UbicacionLandingPage />
        <ContactoLandingPage />
        <MasInformacionLandingPage />
        <CondicionesdeServicioLandingPage />
      </div>
      <div id="DerechosLandingPage">
        {" "}
        {/* Sección de derechos que incluye el componente "Dueño" */}
        <DueñoLandingPage />
      </div>
    </div>
  );
}
