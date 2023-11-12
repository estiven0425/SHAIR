import React, { useState, useEffect } from 'react';
import './Home.css';
import axios from 'axios';
import BarraDeNavegacionHome from './Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from './Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from './Components/LateralDerecho/LateralDerechoHome';

export default function Home() {
  const [espacioData, setEspacioData] = useState([]);

  useEffect(() => {
    // Lógica para obtener los datos de la tabla "espacio" usando axios
    axios.get('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiLeerEspacio.php')
      .then(response => {
        setEspacioData(response.data); // Actualiza el estado con los datos obtenidos
      })
      .catch(error => {
        console.error('Error al obtener datos de espacio:', error);
      });
  }, []); // El segundo argumento [] garantiza que el efecto se ejecute solo una vez al montar el componente

  return (
    <div id='PrincipalHome'>

      <header>
        <BarraDeNavegacionHome/>
      </header>

      <body>

        <section id='IzquierdaHome'>
          <LateralIzquierdoHome/>
        </section>

        <section id='CentroHome'>

          <div id='NoticiaCentroHome'>

          </div>

          <div id='ContenidoCentroHome'>

            <h1>Contenido Destacado de SHAIR</h1>

            {espacioData.map(item => (
              <a href='#'>
                <div key={item.IdEspacio} className='EspacioCentroHome'>
                  {/* Renderiza los detalles del item */}
                  <h1>{item.NombreEspacio}</h1>
                  <p>{item.DescripcionEspacio}</p>
                  <p>Creado por: {item.NombreUsuario}</p>
                  <p>Fecha de cración: {item.FechaCreacion}</p>
                </div>
              </a>
            ))}

          </div>
        </section>

        <section id='DerechoHome'>
          <LateralDerechoHome/>
        </section>

      </body>

    </div>
  );
}
