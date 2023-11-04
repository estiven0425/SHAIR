/*Archivo de entrada (NO ELIMINAR O MODIFICAR)*/

import React from 'react'; /*Importar librería de REACT*/
import ReactDOM from 'react-dom/client'; /*Importar REACT DOM*/
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import './index.css'; /*importar archivo de estilos globales*/
import LandingPage from './LandingPage/LandingPage'; /*Importamos ejecutable de REACT*/
import Home from './Home/Home';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/Home",
    element: <Home/>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
