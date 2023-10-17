import React from 'react' //No tenemos { Component } ya que esto es una función, tampoco tenemos render ()s

export default function (properties){ //Entre parentesis porque el parámetro de la función se llama properties
    return (
        <div>
            <p>¡Soy una función!</p>
            <p>Q'hubo {properties.nombre}, estás en {properties.lugar}</p> {/*Es lo mismo de Component2Test solo que a modo de función, por alguna razón, no se una entre corchetes this.props, si no que se usa el nombre de la función*/}
        </div> //Definimos solo el parámetro, pero al llamarlo dentro de {} le damos nombre a la variable del parámetro el nombre que queramos
    )
}