const buttom_session = document.getElementById('login_alt'); //llamamos etiqueta en una variable

buttom_session.addEventListener('click', function() { //Variable tiene un evento click con la función
  window.location.href = './session_open.php'; //Buscar en la carpeta
});