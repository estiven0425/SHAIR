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
app.get('./anuncio/:IdClienteanuncio', documentController.getByIdClienteanuncio); // define una ruta para obtener un documento por su id
app.post('./anuncio', documentController.createanuncio); // define una ruta para crear un documento en la base de datos
app.put('./anuncio/:id', documentController.updateanuncio); // define una ruta para actualizar un documento en la base de datos
app.delete('./anuncio/:IdCliente', documentController.deleteanuncio); // define una ruta para eliminar un documento de la base de datos

app.get('./archivoespacio', documentController.getAllarchivoespacio); // define una ruta para obtener todos los documentos de la base de datos
app.get('./archivoespacio/:IdEspacioarchivoespacio', documentController.getByIdEspacioarchivoespacio); // define una ruta para obtener un documento por su id
app.post('./archivoespacio', documentController.createarchivoespacio); // define una ruta para crear un documento en la base de datos
app.put('./archivoespacio/:id', documentController.updatearchivoespacio); // define una ruta para actualizar un documento en la base de datos
app.delete('./archivoespacio/:IdEspacio', documentController.deletearchivoespacio); // define una ruta para eliminar un documento de la base de datos

app.get('./archivousuario', documentController.getAllarchivousuario); // define una ruta para obtener todos los documentos de la base de datos
app.get('./archivousuario/:IdUsuarioarchivousuario', documentController.getByIdUsuarioarchivousuario); // define una ruta para obtener un documento por su id
app.post('./archivousuario', documentController.createarchivousuario); // define una ruta para crear un documento en la base de datos
app.put('./archivousuario/:IdUsuario', documentController.updatearchivousuario); // define una ruta para actualizar un documento en la base de datos
app.delete('./archivousuario/:IdUsuario', documentController.deletearchivousuario); // define una ruta para eliminar un documento de la base de datos

app.get('./cliente', documentController.getAllcliente); // define una ruta para obtener todos los documentos de la base de datos
app.get('./cliente/:IdCliente', documentController.getByIdCliente); // define una ruta para obtener un documento por su id
app.post('./cliente', documentController.createcliente); // define una ruta para crear un documento en la base de datos
app.put('./cliente/:IdCliente', documentController.updatecliente); // define una ruta para actualizar un documento en la base de datos
app.delete('./cliente/:IdCliente', documentController.deletecliente); // define una ruta para eliminar un documento de la base de datos

app.get('./denuncia', documentController.getAlldenuncia); // define una ruta para obtener todos los documentos de la base de datos
app.get('./denuncia/:IdUsuariodenuncia', documentController.getByIdUsuariodenuncia); // define una ruta para obtener un documento por su id
app.post('./denuncia', documentController.createdenuncia); // define una ruta para crear un documento en la base de datos
app.put('./denuncia/:IdUsuario', documentController.updatedenuncia); // define una ruta para actualizar un documento en la base de datos
app.delete('./cliente/:IdUsuario', documentController.deletedenuncia); // define una ruta para eliminar un documento de la base de datos

app.get('./espacio', documentController.getAllespacio); // define una ruta para obtener todos los documentos de la base de datos
app.get('./espacio/:IdEspacio', documentController.getByIdEspacio); // define una ruta para obtener un documento por su id
app.post('./espacio', documentController.createespacio); // define una ruta para crear un documento en la base de datos
app.put('./espacio/:IdEspacio', documentController.updateespacio); // define una ruta para actualizar un documento en la base de datos
app.delete('./espacio/:IdEspacio', documentController.deleteespacio); // define una ruta para eliminar un documento de la base de datos

app.get('./facturacion', documentController.getAllfacturacion); // define una ruta para obtener todos los documentos de la base de datos
app.get('./facturacion/:NivelMembresiafacturacion', documentController.getByNivelMembresiafacturacion); // define una ruta para obtener un documento por su id
app.post('./facturacion', documentController.createfacturacion); // define una ruta para crear un documento en la base de datos
app.put('./facturacion/:NivelMembresia', documentController.updatefacturacion); // define una ruta para actualizar un documento en la base de datos
app.delete('./facturacion/:NivelMembresia', documentController.deletefacturacion); // define una ruta para eliminar un documento de la base de datos

app.get('./foro', documentController.getAllforo); // define una ruta para obtener todos los documentos de la base de datos
app.get('./foro/:NivelMembresiaforo', documentController.getByNivelMembresiaforo); // define una ruta para obtener un documento por su id
app.post('./foro', documentController.createforo); // define una ruta para crear un documento en la base de datos
app.put('./foro/:NivelMembresia', documentController.updateforo); // define una ruta para actualizar un documento en la base de datos
app.delete('./foro/:NivelMembresia', documentController.deleteforo); // define una ruta para eliminar un documento de la base de datos

app.get('./miembro', documentController.getAllmiembro); // define una ruta para obtener todos los documentos de la base de datos
app.get('./miembro/:NivelMembresia', documentController.getByNivelMembresia); // define una ruta para obtener un documento por su id
app.post('./miembro', documentController.createmiembro); // define una ruta para crear un documento en la base de datos
app.put('./miembro/:NivelMembresia', documentController.updatemiembro); // define una ruta para actualizar un documento en la base de datos
app.delete('./miembro/:NivelMembresia', documentController.deletemiembro); // define una ruta para eliminar un documento de la base de datos

app.get('./responsableshair', documentController.getAllresponsableshair); // define una ruta para obtener todos los documentos de la base de datos
app.get('./responsableshair/:IdResponsableShair', documentController.getByIdResponsableShair); // define una ruta para obtener un documento por su id
app.post('./responsableshair', documentController.createresponsableshair); // define una ruta para crear un documento en la base de datos
app.put('./responsableshair/:IdResponsableShair', documentController.updateresponsableshair); // define una ruta para actualizar un documento en la base de datos
app.delete('./responsableshair/:IdResponsableShair', documentController.deleteresponsableshair); // define una ruta para eliminar un documento de la base de datos

app.get('./usuario', documentController.getAllusuario); // define una ruta para obtener todos los documentos de la base de datos
app.get('./usuario/:IdUsuario', documentController.getByIdUsuario); // define una ruta para obtener un documento por su id
app.post('./usuario', documentController.createusuario); // define una ruta para crear un documento en la base de datos
app.put('./usuario/:IdUsuario', documentController.updateusuario); // define una ruta para actualizar un documento en la base de datos
app.delete('./usuario/:IdUsuario', documentController.deleteusuario); // define una ruta para eliminar un documento de la base de datos


app.listen(port, () => {
    console.log('Servidor escuchando en el puerto ' + port);
});