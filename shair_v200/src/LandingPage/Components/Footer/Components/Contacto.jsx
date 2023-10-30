import React from 'react'; /* Importamos la librería React para crear componentes */

import './Contacto.css'; /* Importamos un archivo de estilos personalizados para el componente Contacto */

export default function Contacto() {
  return ( /* Definimos un componente funcional llamado Contacto */
    <div id='Contacto'> {/* Creamos un contenedor con el ID "Contacto" que contiene el contenido */ }
      <h1>Contacto</h1> {/* Agregamos un encabezado con el texto "Contacto" */ }
      <a href="mailto:soporte_shair@gmail.com" >soporte_shair@gmail.com</a> {/* Agregamos un enlace que abre el cliente de correo predeterminado con la dirección de correo "soporte_shair@gmail.com" */ }
      <a href="mailto:contacto_shair@gmail.com" >contacto_shair@gmail.com</a> {/* Agregamos otro enlace que abre el cliente de correo predeterminado con la dirección de correo "contacto_shair@gmail.com" */ }
      <a href="tel:+57 3242018817" >+57 3242018817</a> {/* Agregamos un tercer enlace que inicia una llamada con el número de teléfono "+57 3242018817" */ }
    </div>
  )
}
