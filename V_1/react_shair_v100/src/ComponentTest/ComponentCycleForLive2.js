import React from 'react'
import CicloVida from './ComponentCycleForLive1'
//Tampoco entendí
export default class UsarCicloVida extends React.Component {

    constructor(...args) {
        super(...args)
        this.state = {
        valorPropiedad: 'Test de valor de propiedad'
        }
    }

    cambiarPropiedad() {
        this.setState({
        valorPropiedad: 'Otro valor'
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.cambiarPropiedad.bind(this)}>Cambiar propiedad</button>
                <CicloVida propiedad={this.state.valorPropiedad} />
            </div>
        )
    }
}