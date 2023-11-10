var express = require('express');
var archivoespaciorouter = express.Router(); // crea un router
var documentController = require('./BD_v200/documentController.js'); // importa el controlador de los documentos

// Define las rutas para obtener, crear, actualizar y eliminar usuarios
router.route('/')
  .get(documentController.getAllarchivoespacio) // define una ruta para obtener todos los documentos de la base de datos
  .post(documentController.createarchivoespacio); // define una ruta para crear un documento en la base de datos

router.route('/archivoespacio')
  .get(documentController.getByIdEspacioarchivoespacio) // define una ruta para obtener un documento por su id
  .put(documentController.updatearchivoespacio) // define una ruta para actualizar un documento en la base de datos
  .delete(documentController.deletearchivoespacio); // define una ruta para eliminar un documento de la base de datos

module.exports = archivoespaciorouter; // exporta el router
