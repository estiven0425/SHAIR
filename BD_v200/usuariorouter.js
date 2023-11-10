var express = require('express');
var usuariorouter = express.Router(); // crea un router
var documentController = require('./BD_v200/documentController.js'); // importa el controlador de los documentos

// Define las rutas para obtener, crear, actualizar y eliminar usuarios
router.route('/')
  .get(documentController.getAllusuario) // define una ruta para obtener todos los documentos de la base de datos
  .post(documentController.createusuario); // define una ruta para crear un documento en la base de datos

router.route('/usuario')
  .get(documentController.getByIdUsuario) // define una ruta para obtener un documento por su id
  .put(documentController.updateusuario) // define una ruta para actualizar un documento en la base de datos
  .delete(documentController.deleteusuario); // define una ruta para eliminar un documento de la base de datos

module.exports = usuariorouter; // exporta el router
