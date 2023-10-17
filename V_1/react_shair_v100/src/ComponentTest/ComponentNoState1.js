import React from 'react';

export default function (props) { //Lo exportamos sin nombre, pero al importar le podremos poner, lo importante es que no haya dos funciones en un mismo archivo

    var date = new Date(parseInt(props.timestamp, 10)); //Con new creamo un objeto llamado Date, que seria como un vector en un array, con props.timestamp podemos agregar contenido, y con parseInt lo pasamos a entero, 10 significa en formato decimal
    var fecha = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear(); //No entendí

    return (
        <span>{fecha}</span> //Para imprimir variables se llaman con {}
    );
}
