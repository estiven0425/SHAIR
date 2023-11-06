import Form from 'react-bootstrap/Form';
import './BarraDeNavegacionBusquedaEspacioHome.css';

function BarraDeNavegacionBusquedaEspacioHome() {
  return (
    <div id='BarraDeNavegacionBusquedaEspacioHomePrincipal'>
      <Form.Control type="text" placeholder="Buscar" id='BarraDeNavegacionBusquedaEspacioBusquedaHomePrincipal'/>
    </div>
  );
}

export default BarraDeNavegacionBusquedaEspacioHome;