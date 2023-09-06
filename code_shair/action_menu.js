//Inicio script para mostrar/ocultar el menú lateral
const action_show = document.getElementById('show_list'); //Creamos variables cuyo valor es una etiqueta HTML (Botón)
const element_show = document.getElementById('lateral_menu'); //Creamos variables cuyo valor es una etiqueta HTML (Menú lateral)
const menu = document.getElementById('menu_list');
const forum = document.getElementById('forum');

action_show.addEventListener('click', function() { //Variable cuando tenga un evento que es el click, realizará lo siguiente, una función
    if (element_show.style.maxWidth === '0px') { //Si la variable tiene un valor style - maxwidth = 0px ó style - display igual o equivalente a nada cambia lo siguiente
        element_show.style.maxWidth = '10%'; //Su style - maxwidth cambia a 10%
    } //Fin cambios
    else { //Si no
        element_show.style.maxWidth = '0px'; //Cambiar la propiedad a 0px
    } //Fin si no
}); //Fin evento