/*Archivo de entrada (NO ELIMINAR O MODIFICAR)*/

import React from "react"; /*Importar librería de REACT*/
import ReactDOM from "react-dom/client"; /*Importar REACT DOM*/
import { createBrowserRouter, RouterProvider } from "react-router-dom"; /*Importamos el navegador de pestañas de REACT*/
import "./index.css"; /*importar archivo de estilos globales*/
import LandingPage from "./LandingPage/LandingPage"; /*Importamos ejecutable de REACT*/
import Home from "./Home/Home"; /*Importamos ejecutable de REACT*/
import CrearCuenta from "./Formularios/CrearCuenta/CrearCuenta";
import IniciarSesion from "./Formularios/IniciarSesion/IniciarSesion";
import UsuarioOtro from "./Usuario/Otro/UsuarioOtro";
import EspacioOtro from "./Espacio/EspacioOtro/EspacioOtro";
import UsuarioPropio from "./Usuario/Propio/UsuarioPropio";
import EspacioPropio from "./Espacio/EspacioPropio/EspacioPropio";
import CrearEspacio from "./Formularios/CrearEspacio/CrearEspacio";
import ModificarEspacio from "./Formularios/ModificarEspacio/ModificarEspacio";
import ModificarCuenta from "./Formularios/ModificarCuenta/ModificarCuenta";
import reportWebVitals from "./reportWebVitals"; /*Importamos el reporte de errores*/
import { AuthProvider } from "./BD_v200/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/CrearCuenta",
    element: <CrearCuenta />,
  },
  {
    path: "/IniciarSesion",
    element: <IniciarSesion />,
  },
  {
    path: "/UsuarioOtro/:IdUsuario",
    element: <UsuarioOtro />,
  },
  {
    path: "/EspacioOtro/:IdEspacio",
    element: <EspacioOtro />,
  },
  {
    path: "/UsuarioPropio/:IdUsuario",
    element: <UsuarioPropio />,
  },
  {
    path: "/ModificarCuenta/:IdUsuario",
    element: <ModificarCuenta />,
  },
  {
    path: "/EspacioPropio/:IdEspacio",
    element: <EspacioPropio />,
  },
  {
    path: "/CrearEspacio",
    element: <CrearEspacio />,
  },
  {
    path: "/ModificarEspacio/:IdEspacio",
    element: <ModificarEspacio />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
