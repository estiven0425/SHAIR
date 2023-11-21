import React, { useState } from "react"; // Importamos la librería de React y el hook useState para manejar el estado del componente
import Button from "react-bootstrap/Button"; // Importamos el componente Button de la librería react-bootstrap para crear un botón estilizado
import "./BotonSeccion4LandingPage.css"; // Importamos el archivo de estilos CSS para el componente

function BotonSeccion4LandingPage() {
  // Definimos una función llamada BotonSeccion4LandingPage que retorna un elemento JSX

  const [isClicked, setIsClicked] = useState(false); // Usamos el hook useState para crear una variable de estado llamada isClicked que indica si el botón está siendo presionado o no, y una función para actualizarla llamada setIsClicked

  const handleMouseDown = () => {
    // Definimos una función llamada handleMouseDown que se ejecuta cuando se presiona el botón con el ratón
    setIsClicked(true); // Actualizamos la variable de estado isClicked a true
  };

  const handleMouseUp = () => {
    // Definimos una función llamada handleMouseUp que se ejecuta cuando se suelta el botón con el ratón
    setIsClicked(false); // Actualizamos la variable de estado isClicked a false
  };

  return (
    // Retornamos el contenido JSX del componente
    <>
      {" "}
      {/* Usamos un fragmento para agrupar los elementos sin crear un nodo extra */}
      <div className="mb-4">
        {" "}
        {/* Creamos un div con la clase mb-2 que le da un margen inferior de 2 unidades */}
        <Button /* Creamos un elemento Button que renderiza un botón con los siguientes atributos: */
          variant="primary" /* Le damos una variante primaria que le da un color azul por defecto */
          size="lg" /* Le damos un tamaño grande que le da una altura y un ancho mayores */
          style={{
            /* Le damos unos estilos en línea que dependen del estado del botón */
            backgroundColor: isClicked
              ? "#8e4c98"
              : "#fdb23b" /* Si el botón está siendo presionado, le damos un color de fondo morado, si no, le damos un color de fondo naranja */,
            borderColor: isClicked
              ? "#8e4c98"
              : "#fdb23b" /* Si el botón está siendo presionado, le damos un color de borde morado, si no, le damos un color de borde naranja */,
            transform: isClicked
              ? "scale(1.1)"
              : "scale(1.0)" /* Si el botón está siendo presionado, le aplicamos una transformación de escala de 1.1 para aumentar su tamaño, si no, le dejamos la escala normal de 1.0 */,
          }}
          onMouseDown={
            handleMouseDown
          } /* Le asignamos la función handleMouseDown al evento onMouseDown para que se ejecute cuando se presione el botón con el ratón */
          onMouseUp={
            handleMouseUp
          } /* Le asignamos la función handleMouseUp al evento onMouseUp para que se ejecute cuando se suelte el botón con el ratón */
        >
          <a href="#">Anunciarte</a>{" "}
          {/* Dentro del botón, creamos un elemento a que renderiza un enlace con el texto "Anunciarte" y el atributo href con el valor "#" para que al hacer clic se desplace a */}
        </Button>
      </div>
    </>
  );
}

export default BotonSeccion4LandingPage; // Exportamos la función BotonSeccion4LandingPage como el componente por defecto del módulo
