var mysql = require('mysql');
var config = require('./BD_v200/config.js'); // importa el archivo de configuración
var express = require('express');
var connection = mysql.createConnection(config); // crea la conexión a la base de datos usando el archivo de configuración
var app = express();
var port = 3000; // puedes usar cualquier puerto disponible
var bodyParser = require('body-parser'); // importa el middleware body-parser

connection.connect((err) => { // conecta a la base de datos

  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }

  console.log('Conexión exitosa a la base de datos');

});

app.use(bodyParser.json());

// Importa los routers de cada tabla
var anunciorouter = require('./BD_v200/anunciorouter.js');
var archivoespaciorouter = require('./BD_v200/archivoespaciorouter.js');
var archivousuariorouter = require('./BD_v200/archivousuariorouter.js');
var clienterouter = require('./BD_v200/clienterouter.js');
var denunciarouter = require('./BD_v200/denunciarouter.js');
var espaciorouter = require('./BD_v200/espaciorouter.js');
var facturacionrouter = require('./BD_v200/facturacionrouter.js');
var fororouter = require('./BD_v200/fororouter.js');
var miembrorouter = require('./BD_v200/miembrorouter.js');
var responsableshairrouter = require('./BD_v200/responsableshairrouter.js');
var usuariorouter = require('./BD_v200/usuariorouter.js');
// Puedes importar los demás routers que tengas

// Usa el middleware body-parser para parsear el cuerpo de las peticiones en formato JSON
app.use(bodyParser.json());

// Monta los routers en las rutas correspondientes

usuariorouter.route('/')
  .post(documentController.createUsuario);
archivoespaciorouter.route('/')
  .post(documentController.createarchivoespacio);
archivousuariorouter.route('/')
  .post(documentController.createarchivousuario);
clienterouter.route('/')
  .post(documentController.createcliente);
denunciarouter.route('/')
  .post(documentController.createdenuncia);
espaciorouter.route('/')
  .post(documentController.createespacio);
facturacionrouter.route('/')
  .post(documentController.createfacturacion);
fororouter.route('/')
  .post(documentController.createforo);
miembrorouter.route('/')
  .post(documentController.createmiembro);
responsableshairrouter.route('/')
  .post(documentController.createresponsable);

app.use('/anuncio', anunciorouter);
app.use('/archivoespacio', archivoespaciorouter);
app.use('/archivousuario', archivousuariorouter);
app.use('/cliente', clienterouter);
app.use('/denuncia', denunciarouter);
app.use('/espacio', espaciorouter);
app.use('/facturacion', facturacionrouter);
app.use('/foro', fororouter);
app.use('/miembro', miembrorouter);
app.use('/responsableshair', responsableshairrouter);
app.use('/usuario', usuariorouter);
// Puedes montar los demás routers que tengas

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});
