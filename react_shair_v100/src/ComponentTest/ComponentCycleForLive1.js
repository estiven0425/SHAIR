import React from 'react'

export default class CicloVida extends React.Component {

    constructor(...args) {
        console.log('Ejecuto constructor', ...args)
        super(...args)
        this.state = {
        estado: 'Inicializado en el constructor'
        }
    }
    componentWillMount() {
        console.log('Se ejecuta componentWillMount')
    }
    componentDidMount() {
        console.log('Se ejecuta componentDidMount')
    }
    componentWillReceiveProps(nextProps) {
        console.log('Se ejecuta componentWillReceiveProps con las propiedades futuras', nextProps)
    }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('Ejecutando shouldComponentUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    // debo devolver un boleano
        return true
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Ejecutando componentWillUpdate. Próximas propiedades y estado: ', nextProps, nextState)
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Ejecutando componentDidUpdate. Anteriores propiedades y estado: ', prevProps, prevState)
    }
    componentWillUnmount() {
        console.log('Se desmonta el componente...')
    }
    render() {
        return (
            <div>
                <p>Componente del ciclo de vida</p>
                <p>Estado: {this.state.estado}</p>
                <p>Propiedad: {this.props.propiedad}</p>
            </div>
        )
    }
}
CicloVida.defaultProps = {
propiedad: 'Valor por defecto definido para la propiedad'
} //No entendí nada y no creo necesitarlo