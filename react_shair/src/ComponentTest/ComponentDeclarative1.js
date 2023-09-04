import React, {Component} from "react";

class ComponentDeclarative1 extends Component {
    render() {
        return (
            <p>
                <button onClick={this.toggleSlider}>¿Necesitas más tiempo?</button> {/*Siempre lleva on como prefijo, ya con this.function selecionamos la función que se hará, si está en otro componente debemos importarla*/}
            </p>
        );
    }

    toggleSlider() { //Debe ir dentro de el componente, si no, se le deberá crear como función y será poco practico
        alert('Yo tambien');
    }
}

export default ComponentDeclarative1