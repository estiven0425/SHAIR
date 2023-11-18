import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [IdUsuario, setIdUsuario] = useState(null);

  // Verifica la sesión al cargar el componente
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiObtenerIdUsuarioPropio.php', {
          method: 'GET, POST, OPTIONS',
          credentials: 'include', // Incluye las cookies en la solicitud
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = response.data;

        if (data.IdUsuario) {
          setIdUsuario(data.IdUsuario);
          setIsLoggedIn(true);
        } else {
          // Si la API de checksession no devuelve IdUsuario, intenta obtenerlo de la API de inicio de sesión
          const loginResponse = await axios.post('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiCheckSesion.php', {
            method: 'GET, POST, OPTIONS',
            credentials: 'include',
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const loginData = loginResponse.data;

          if (loginData.IdUsuario) {
            setIdUsuario(loginData.IdUsuario);
            setIsLoggedIn(true);
          }
        }
      } catch (error) {
        console.error('Error al verificar sesión:', error);
      }
    };

    checkSession();
  }, []); // El [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, IdUsuario }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
