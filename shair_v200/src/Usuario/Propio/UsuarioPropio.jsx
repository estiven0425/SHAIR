import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UsuarioPropio.css';
import BarraDeNavegacionHome from '../../Home/Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from '../../Home/Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from '../../Home/Components/LateralDerecho/LateralDerechoHome';
import { useParams } from 'react-router-dom';

function UsuarioPropio() {
  const { IdUsuario } = useParams();
  const [userData, setUserData] = useState({});
  const [espaciosData, setEspaciosData] = useState([]);
  const userId = localStorage.getItem('sessionId');

  useEffect(() => {
    // Verificar si IdUsuario está definido antes de hacer la solicitud
    if (IdUsuario) {
      const fetchUserData = async () => {
        try {
          // Obtener información del usuario y sus espacios
          const response = await axios.get(`http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioUsuarioPropio.php?IdUsuario=${IdUsuario}`);
          
          const userData = response.data[0];
          setUserData(userData);
  
          const espaciosDelUsuario = Array.isArray(response.data) ? response.data.filter(item => item.IdUsuario === userData.IdUsuario) : [];
          setEspaciosData(espaciosDelUsuario);
        } catch (error) {
          console.error('Error al obtener datos del usuario:', error);
        }
      };
  
      fetchUserData();
    }
  }, [IdUsuario]);

  return (
    <div id='PrincipalUsuarioPropio'>
      <header>
        <BarraDeNavegacionHome />
      </header>

      <div id='bodyUsuarioPropio'>
        <section id='IzquierdaUsuarioPropio'>
          <LateralIzquierdoHome />
        </section>

        <section id='CentroUsuarioPropio'>
          <div id='InformacionUsuarioPropio'>
            <h1>{userData.NombreUsuario}</h1>
            <p>{userData.DescripcionUsuario}</p>
          </div>

          <div id='ContenidoCentroUsuarioPropio'>
            <h1>Tus espacios</h1>
            {espaciosData.map(item => (
              <div key={item.IdEspacio}>
                <h2>{item.NombreEspacio}</h2>
                <p>{item.DescripcionEspacio}</p>
                <p>Fecha de creación: {item.FechaCreacion}</p>
              </div>
            ))}
          </div>
        </section>

        <section id='DerechoUsuarioPropio'>
          <LateralDerechoHome />
        </section>
      </div>
    </div>
  );
}

export default UsuarioPropio;
