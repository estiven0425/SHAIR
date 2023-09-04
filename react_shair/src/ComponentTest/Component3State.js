import React from 'react'

export default class Counter3 extends React.Component {

    constructor(...args) { //Inicializamos en cero y creamos registro de estado
        super(...args)
        this.state = { //This state es para darle nombre al estado
        counter: 0
        }
    }
//Los estados no se deben modificar directamente, si no, mediante this.setState ({ el estado: this.el estado inicializado ya y lo que se hará})
    increment1() { //Esto es una función
        this.setState({ //No se que es setState, creo que es para seleccionar un estado, pero es igual a counter + el estado actual + 1
            counter: this.state.counter + 1 //Este es el estado que empezamos a almacenar arriba
        })
    }

    reduced1(){
        this.setState({ //Seleccionamos el estado
            counter: this.state.counter -1 //El estado counter es igual a estado counter - 1
        }) //Es como variables
    }
//Los estados son solo lectura, las propiedades si pueden cambiar
    render() {
        return (
            <div>
                <span>Cuenta actual: {this.state.counter}</span> {/*Acá concatenamos con el estado de counter actual*/}
                <button onClick={this.increment1.bind(this)}>+</button> {/*Este botón llama la función increment, no se que es bind ni por qué el this, pero el + es lo que dice el botón*/}
                <button onClick={this.reduced1.bind(this)}>-</button>
            </div>
        )
    }
}