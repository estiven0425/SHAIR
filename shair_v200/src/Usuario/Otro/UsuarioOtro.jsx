import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsuarioOtro.css';
import BarraDeNavegacionHome from '../../Home/Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from '../../Home/Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from '../../Home/Components/LateralDerecho/LateralDerechoHome';
import { useParams } from 'react-router-dom'; // Importar useParams de react-router-dom
import { AuthProvider } from '../../BD_v200/AuthContext'; // Si es necesario

const UsuarioOtro = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const [espaciosData, setEspaciosData] = useState([]);

  const { idUsuario } = useParams(); // Obtener idUsuario de la URL

  useEffect(() => {
    // Obtener información del usuario y sus espacios
    axios.get(`http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioUsuarioOtro.php?userId=${idUsuario}`)
      .then(response => {
        const userData = response.data[0]; // Tomar el primer elemento ya que es el mismo para todos los espacios
        setUserData(userData);

        // Filtrar los espacios que pertenecen al usuario actual
        const espaciosDelUsuario = response.data.filter(item => item.IdUsuario === userData.IdUsuario);
        setEspaciosData(espaciosDelUsuario);
      })
      .catch(error => {
        console.error('Error al obtener datos del usuario:', error);
      });
  }, [idUsuario]);

  return (
    <div id='PrincipalUsuarioOtro'>
      <header>
        <BarraDeNavegacionHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>

      <div id='bodyUsuarioOtro'>
        <section id='IzquierdaUsuarioOtro'>
          <LateralIzquierdoHome />
        </section>

        <section id='CentroUsuarioOtro'>
          <div id='InformacionUsuarioOtro'>
            <h1>{userData.NombreUsuario}</h1>
            <p>{userData.DescripcionUsuario}</p>
          </div>

          <div id='ContenidoCentroUsuarioOtro'>
            <h1>Espacios</h1>
            {espaciosData.map(item => (
              <div key={item.IdEspacio}>
                <h2>{item.NombreEspacio}</h2>
                <p>{item.DescripcionEspacio}</p>
                <p>Fecha de creación: {item.FechaCreacion}</p>
                {/* Agrega más detalles según sea necesario */}
              </div>
            ))}
          </div>
        </section>

        <section id='DerechoUsuarioOtro'>
          <LateralDerechoHome />
        </section>
      </div>
    </div>
  );
};

export default UsuarioOtro;
