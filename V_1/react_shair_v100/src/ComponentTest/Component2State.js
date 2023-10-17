import React from 'react'

export default class Counter2 extends React.Component {

    constructor(...args) { //Contructor inicializa
        super(...args)
        this.state = { //this.state es el estado y counter es la propiedad
        counter: 0 //El estado incial es 0
        }
    }
    render() {
        return (
            <div>Cuenta actual: {this.state.counter}</div> //Ahora en vez this.prop, usamos this.state y el parametro, ya que queremos saber el estado
        )
    }
}