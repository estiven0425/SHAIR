/*Archivo de entrada (NO ELIMINAR O MODIFICAR)*/

import React from 'react'; /*Importar librería de REACT*/
import ReactDOM from 'react-dom/client'; /*Importar REACT DOM*/
import './index.css'; /*importar archivo de estilos globales*/
import LandingPage from './LandingPage'; /*Importamos ejecutable de REACT*/
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage/> {/*Llamamos componente*/}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
