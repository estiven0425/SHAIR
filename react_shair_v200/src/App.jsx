import logo from './logo.png';
import './App.css';
import BarraNavegacion from './Componentes/BarraNavegacion';

function App() {
  return (
    
    <section>
      <div>
        <h1>Inicio</h1>
        <img src={logo} className='AppLogo' alt='Logo'/>
        <BarraNavegacion></BarraNavegacion>
      </div>
    </section>
  );
}

export default App;
