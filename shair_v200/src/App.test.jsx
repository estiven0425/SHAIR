import { render, screen } from '@testing-library/react'; // Importa las funciones necesarias de @testing-library/react para realizar pruebas
import LandingPage from './LandingPage/LandingPage'; //Importa la landing page

test('renders learn react link', () => { // Define un nuevo test con una descripción
  render(<LandingPage />); // Renderiza el componente LandingPage (simulando su renderización)
  const linkElement = screen.getByText(/learn react/i); // Busca un elemento que contenga el texto "learn react" en el DOM virtual y almacena el resultado en linkElement
  expect(linkElement).toBeInTheDocument(); // Verifica que linkElement esté presente en el DOM virtual
});
