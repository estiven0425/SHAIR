var express = require('express');
var responsableshairrouter = express.Router(); // crea un router
var documentController = require('./BD_v200/documentController.js'); // importa el controlador de los documentos

// Define las rutas para obtener, crear, actualizar y eliminar usuarios
router.route('/')
  .get(documentController.getAllresponsableshair) // define una ruta para obtener todos los documentos de la base de datos
  .post(documentController.createresponsableshair); // define una ruta para crear un documento en la base de datos

router.route('/responsableshair')
  .get(documentController.getByIdresponsableshair) // define una ruta para obtener un documento por su id
  .put(documentController.updateresponsableshair) // define una ruta para actualizar un documento en la base de datos
  .delete(documentController.deleteresponsableshair); // define una ruta para eliminar un documento de la base de datos

module.exports = responsableshairrouter; // exporta el router
