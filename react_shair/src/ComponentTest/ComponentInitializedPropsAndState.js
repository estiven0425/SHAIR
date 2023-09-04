import React from 'react'

export default class CycleForLive extends React.Component {

    constructor(...args) { //Ya sabemos que es para inicializar
        super(...args) //...args es para traer todos los parametros de ese libro, ¿Para? no sé, solo hazlo
        console.log('Ejecuto constructor', ...args) //Supongo que para mostrar en consola ¿Pero por qué el ..args?
        this.state = {
        state1: 'Inicializado en el constructor' //El estado se llama state1 y su valor es este texto
        }
    }

    render() {
        return (
            <div>
                <p>Componente con propiedades y estado inicializado</p>
                <p>Estado: {this.state.state1}</p> {/*Estado: el estado actual de state1*/}
                <p>Propiedad: {this.props.properties}</p> {/*Propiedad: las propiedades de properties*/}
            </div>
        )
    }
}
CycleForLive.defaultProps = { //Establecemos valor por defecto para las propiedades de este componente
properties: 'Valor por defecto definido para la propiedad' //Esta es la propiedad y su valor
}//Por no estar dentro de la clase, se ejecuta una vez, esto solo para propiedades, para estado si se debe inicializar en cada uso (Estar dentro)