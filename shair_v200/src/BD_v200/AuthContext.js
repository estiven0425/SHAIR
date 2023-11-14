import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Verifica la sesión al cargar el componente
  useEffect(() => {
    const checkSession = async () => {
      try {
        const response = await fetch('http://localhost/SHAIR/shair_v200/src/BD_v200/ApiCheckSesion.php', {
          method: 'GET',
          credentials: 'include', // Incluye las cookies en la solicitud
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const data = await response.json();

        if (data.IdUsuario) {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error al verificar sesión:', error);
      }
    };

    checkSession();
  }, []); // El [] asegura que esto solo se ejecute una vez al montar el componente

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
