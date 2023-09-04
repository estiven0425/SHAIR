import React from 'react'

export default class Counter1 extends React.Component { //React.Componente ya que no se importó el { Component }, toca especificar
    //Entiendo que boilerplates son como libros o preconfiguraciones
    constructor(...args) { //...args es para traer todos los parametros de estos libros, el contructor es para inicializar los componentes con estado, y debe ser el padre, por eso llamamos tambien a super
        super(...args) //Llamamos al constructor de la clase super, por lo que asumo que super es una clase y que ya existe
    }
    render() {
        return (
            <div>¡Esto aun no tiene estado!</div>
        )
    }
}//Este componente con estado no está inicializado, por ende no funciona como componente con estado