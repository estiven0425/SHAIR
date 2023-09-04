import React, { Component } from 'react';

export default class Component2Test extends Component { //Esta es una forma alternativa de crear y esportar componentes
    render () {
        return (
            <div>
                Bienvenido{this.props.part1} a{this.props.part2} {/*Así le damos valor a cada parte, por lo que podemos agregar contenido contínuo en otro componente que nos llame*/}
            </div>
        )
    }
}