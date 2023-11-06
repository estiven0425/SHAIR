var mysql = require('mysql');
var config = require('./BD_v200/config.js'); // importa el archivo de configuración
var express = require('express');
var connection = mysql.createConnection(config); // crea la conexión a la base de datos usando el archivo de configuración
var app = express();
var port = 3000; // puedes usar cualquier puerto disponible
var documentController = require('./BD_v200/documentController.js'); // importa el controlador de los documentos que creaste previamente

connection.connect((err) => { // conecta a la base de datos

  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }

  console.log('Conexión exitosa a la base de datos');

});

app.get('./anuncio', documentController.getAllanuncio); // define una ruta para obtener todos los documentos de la base de datos
app.get('./anuncio/:IdCliente', documentController.getByIdClienteanuncio); // define una ruta para obtener un documento por su id
app.post('./anuncio', documentController.createanuncio); // define una ruta para crear un documento en la base de datos
app.put('./anuncio/:id', documentController.updateanuncio); // define una ruta para actualizar un documento en la base de datos
app.delete('./anuncio/:IdCliente', documentController.deleteanuncio); // define una ruta para eliminar un documento de la base de datos

app.get('./archivoespacio', documentController.getAllarchivoespacio); // define una ruta para obtener todos los documentos de la base de datos
app.get('./archivoespacio/:IdEspacio', documentController.getByIdEspacioarchivoespacio); // define una ruta para obtener un documento por su id
app.post('./archivoespacio', documentController.createarchivoespacio); // define una ruta para crear un documento en la base de datos
app.put('./archivoespacio/:id', documentController.updatearchivoespacio); // define una ruta para actualizar un documento en la base de datos
app.delete('./archivoespacio/:IdEspacio', documentController.deletearchivoespacio); // define una ruta para eliminar un documento de la base de datos

app.get('./archivousuario', documentController.getAllarchivousuario); // define una ruta para obtener todos los documentos de la base de datos
app.get('./archivousuario/:IdUsuario', documentController.getByIdUsuarioarchivousuario); // define una ruta para obtener un documento por su id
app.post('./archivousuario', documentController.createarchivousuario); // define una ruta para crear un documento en la base de datos
app.put('./archivousuario/:IdUsuario', documentController.updatearchivousuario); // define una ruta para actualizar un documento en la base de datos
app.delete('./archivousuario/:IdUsuario', documentController.deletearchivousuario); // define una ruta para eliminar un documento de la base de datos

app.get('./cliente', documentController.getAllcliente); // define una ruta para obtener todos los documentos de la base de datos
app.get('./cliente/:IdCliente', documentController.getByIdCliente); // define una ruta para obtener un documento por su id
app.post('./cliente', documentController.createcliente); // define una ruta para crear un documento en la base de datos
app.put('./cliente/:IdCliente', documentController.updatecliente); // define una ruta para actualizar un documento en la base de datos
app.delete('./cliente/:IdCliente', documentController.deletecliente); // define una ruta para eliminar un documento de la base de datos

app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});