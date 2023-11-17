import React, { useEffect, useContext } from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import BarraDeNavegacionHome from './Components/Header/BarraDeNavegacionHome';
import LateralIzquierdoHome from './Components/LateralIzquierdo/LateralIzquierdoHome';
import LateralDerechoHome from './Components/LateralDerecho/LateralDerechoHome';
import { useState } from 'react';
import { useAuth } from '../BD_v200/AuthContext';

export default function Home() {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
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

  const simulateLogin = async () => {
    // Simula una solicitud al servidor para iniciar sesión
    try {
      const response = await axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiSimularInicioSesion.php');
      if (response.data.success) {
        setIsLoggedIn(true);
        alert('Inicio de sesión simulado exitosamente');
      } else {
        console.error('Error al simular inicio de sesión:', response.data.message);
      }
    } catch (error) {
      console.error('Error al simular inicio de sesión:', error);
    }
  };

  return (
    <div id='PrincipalHome'>
      <header>
        <BarraDeNavegacionHome isLoggedIn={isLoggedIn} />
      </header>

      <div id='bodyHome'>
        <section id='IzquierdaHome'>
          <LateralIzquierdoHome isLoggedIn={isLoggedIn} />
        </section>

        <section id='CentroHome'>

          <div id='NoticiaCentroHome'>
            <a href="#" id='NoticiaCentroHomenN'>
              <h1>¡Anuncio importante!</h1>
              <p>Debido a los crecientes problemas en el inicio de sesión, se está considerando la opción de eliminar esta mecánica de la plataforma, agradecemos su comprensión 
                y lamentamos cualquier problema relacionado al inicio de sesión, el equipo de desarrollo de SHAIR implementará acciones de emergencia para la entrega de fase, 
                simulando un inicio de sesión y habilitando funciones exclusivas del inicio de sesión en la pantalla principal, esto con el fin de cumplir con el porcentaje de 
                proyecto requerido para la entrega de fase.

                Lamentamos nuevamente los problemas ocacionados por nuestro programador.
                <br></br>
                <hr></hr>
                <h5>¡Un abrazo fuerte de parte de SHAIR!</h5>
              </p>
            </a>

            <Button  variant="outline-primary" className='BotonDerecha' onClick={simulateLogin}>Simular inicio de sesión</Button>

          </div>

          <div id='ContenidoCentroHome'>
            <h1>Contenido Destacado de SHAIR</h1>

            {espacioData.map(item => (
              <a href="#" key={item.IdEspacio} id='ContenidoCentroHomeA'>
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
          <LateralDerechoHome isLoggedIn={isLoggedIn} />
        </section>
      </div>
    </div>
  );
}
