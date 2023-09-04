import logo from './thepolice.jpeg'; //Esta línea y la de abajo importan el logo y el CSS
import './App.css'; //Una función o un componente debe tener CSS propio, así que se le debe crear e importar
import React, { Component } from 'react'; //Importamos la libreria de react y la clase component, esto para poder crear componentes
import Component1Test from './ComponentTest/Component1Test';
import Component3Test from './ComponentTest/Component3Test';
import Counter3 from './ComponentTest/Component3State';
import CycleForLive from './ComponentTest/ComponentInitializedPropsAndState';
import ComponentDeclarative1 from './ComponentTest/ComponentDeclarative1';

function App() { //Creamos un afunción llamada App
  return ( //Imprimimos lo siguiente
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> {/*En la img usamos src={como importamos el logo}*/}
        <p>
          Este es otra vez un repaso en REACT ¿Será el final?
        </p>
        <App1/>
        <Component1Test/>
        <Component3Test/>
        <Counter3/>
        <CycleForLive/>
        <ComponentDeclarative1/>
      </header>
    </div>
  );
}

class App1 extends Component { //Creamos una clase y la convertimos en componente
  render () { //Es lo que hará el componente
    return ( //Imprimir esto
      <div className='App1'>
        <h1>Welcome stranger</h1>
        <p>Ahhh i buying at high price</p>
      </div>
    )
  }
} //La diferencia entre función y componente es que la función se ejecuta siempre en el js, mientras que el componente no se ejecuta hasta que lo llamemos, podemos llamara un componente dentro de una función y exportar la función, pero es un poco enredado

export default App; //Exportamos con el nombre App, lo que nos permite importar en otro documento
//Lo ideal sería que este componente estuviera aparte y lo importaramos a esta función, pero como es un ejemplo lo omitiremos
//Exportar siempre debe ser lo último