import Form from 'react-bootstrap/Form';
import axios from 'axios';
import './BarraDeNavegacionBusquedaEspacioHome.css';

function BarraDeNavegacionBusquedaEspacioHome() {
  return (
    <div id='BarraDeNavegacionBusquedaEspacioHomePrincipal'>
      <Form.Control type="text" placeholder="Buscar" id='BarraDeNavegacionBusquedaEspacioBusquedaHomePrincipal'/>
    </div>
  );
}

export default BarraDeNavegacionBusquedaEspacioHome;