import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import './UsuarioPropio.css';
import BarraDeNavegacionHome from '../../Home/Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from '../../Home/Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from '../../Home/Components/LateralDerecho/LateralDerechoHome';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../BD_v200/AuthContext'; // Importar el contexto

function UsuarioPropio() {
  const { IdUsuario } = useParams();
  const [userData, setUserData] = useState({});
  const [espaciosData, setEspaciosData] = useState([]);
  const { isLoggedIn } = useAuth(); // Obtener el estado de inicio de sesión del contexto

  useEffect(() => {
    // Verificar si IdUsuario está definido antes de hacer la solicitud
    if (IdUsuario, isLoggedIn) {
      const fetchUserData = async () => {
        try {
          // Obtener información del usuario y sus espacios
          const response = await axios.get(`http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacioUsuarioPropio.php?id=29`);
          
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
  }, [IdUsuario, isLoggedIn]);  

  return (
    <div id='PrincipalUsuarioPropio'>
      <header>
        <BarraDeNavegacionHome isLoggedIn={isLoggedIn} />
      </header>

      <div id='bodyUsuarioPropio'>
        <section id='IzquierdaUsuarioPropio'>
          <LateralIzquierdoHome  isLoggedIn={isLoggedIn} />
        </section>

        <section id='CentroUsuarioPropio'>
          <div id='InformacionUsuarioPropio'>
            {userData && (
              <>
                <h1>{userData.NombreUsuario}</h1>
                <p>{userData.DescripcionUsuario}</p>
              </>
            )}
          </div>

          <div id='ContenidoCentroUsuarioPropio'>
            <h1>Tus espacios</h1>
            {espaciosData.length === 0 ? (
              // Mostrar mensaje cuando no hay espacios
              <p>No tienes espacios. ¡Crea uno ahora!</p>
            ) : (
              // Mostrar la lista de espacios
              espaciosData.map(item => (
                <div key={item.IdEspacio}>
                  <h2>{item.NombreEspacio}</h2>
                  <p>{item.DescripcionEspacio}</p>
                  <p>Fecha de creación: {item.FechaCreacion}</p>
                </div>
              ))
            )}

            {/* Mostrar el botón para crear espacio */}
            <Button variant="outline-primary" className='BotonDerecha' href='/CrearEspacio'>Crear un espacio</Button>
          </div>
        </section>

        <section id='DerechoUsuarioPropio'>
          <LateralDerechoHome isLoggedIn={isLoggedIn} />
        </section>
      </div>
    </div>
  );
}

export default UsuarioPropio;
