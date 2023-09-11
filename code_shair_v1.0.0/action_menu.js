//Inicio script para mostrar/ocultar el menú lateral
const action_show = document.getElementById('show_list'); //Creamos variables cuyo valor es una etiqueta HTML (Botón)
const element_show = document.getElementById('lateral_menu'); //Creamos variables cuyo valor es una etiqueta HTML (Menú lateral)
const move_list = document.getElementById('content'); //Llamamos la sección principal

action_show.addEventListener('click', function() { //Variable cuando tenga un evento que es el click, realizará lo siguiente, una función
    if (element_show.style.maxWidth === '0px') { //Si la variable tiene un valor style - maxwidth = 0px ó style - display igual o equivalente a nada cambia lo siguiente
        element_show.style.maxWidth = '10%'; //Su style - maxwidth cambia a 10%
        element_show.style.paddingTop = '5%';
        move_list.style.padding = '80px 5px 5px 10.3%'; //Cambiamos el padding
        action_show.style.marginLeft = '70px'; //Recupera margen el botón
    } //Fin cambios
    else { //Si no
        element_show.style.maxWidth = '0px'; //Cambiar la propiedad a 0px
        element_show.style.paddingTop = '5%';
        move_list.style.padding = '80px 5px 5px 5px'; //Restauramos el padding
        action_show.style.marginLeft = '5px'; //pierde margen el botón
    } //Fin si no
}); //Fin evento
