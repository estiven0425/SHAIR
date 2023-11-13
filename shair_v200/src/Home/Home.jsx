import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import BarraDeNavegacionHome from './Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from './Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from './Components/LateralDerecho/LateralDerechoHome';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [espacioData, setEspacioData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacio.php')
      .then(response => {
        setEspacioData(response.data);
      })
      .catch(error => {
        console.error('Error al obtener datos de espacio:', error);
      });
  }, []);

  // Esta función simula el inicio de sesión, asegúrate de que se esté llamando cuando esperas
  const simulateLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div id='PrincipalHome'>
      <header>
        <BarraDeNavegacionHome isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>

      <div id='bodyHome'>
        <section id='IzquierdaHome'>
          <LateralIzquierdoHome/>
        </section>

        <section id='CentroHome'>
          <div id='NoticiaCentroHome'></div>
          <div id='ContenidoCentroHome'>
            <h1>Contenido Destacado de SHAIR</h1>

            {espacioData.map(item => (
              <a href={`/UsuarioOtro/${item.IdUsuario}`} key={item.IdEspacio} id='ContenidoCentroHomeA'>
                <div className='EspacioCentroHome'>
                  <h1>{item.NombreEspacio}</h1>
                  <p>{item.DescripcionEspacio}</p>
                  <p>Creado por: <a href={`/UsuarioOtro/${item.IdUsuario}`}>{item.NombreUsuario}</a></p>
                  <p>Fecha de creación: {item.FechaCreacion}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id='DerechoHome'>
          <LateralDerechoHome/>
        </section>
        
        <button onClick={simulateLogin}>Simular inicio de sesión</button>
        
      </div>
    </div>
  );
}
