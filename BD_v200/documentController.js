var mysql = require('mysql');
var config = require('./config.js');
var connection = mysql.createConnection(config);

//-----------------------------------------------------------------------------------------------------------------------------------------------//
// función para obtener todos los documentos de la base de datos
exports.getAllanuncio = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM anuncio';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el anuncio' });
      } else {
        // si no hay error, envía los resultados como una respuesta JSON
        res.status(200).json(results);
      }
    });
};
  
// función para obtener un documento por su id
exports.getByIdClienteanuncio = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM anuncio WHERE IdCliente = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el anuncio' });
      } else {
        // si no hay error, verifica si hay algún resultado
        if (results.length > 0) {
          // si hay un resultado, envía el resultado como una respuesta JSON
          res.status(200).json(results[0]);
        } else {
          // si no hay ningún resultado, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El anuncio no existe' });
        }
      }
    });
};
  
// función para crear un documento en la base de datos
exports.createanuncio = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO anuncio SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al crear el anuncio' });
      } else {
        // si no hay error, envía un mensaje de éxito con el id del documento creado
        res.status(201).send({ message: 'anuncio creado con éxito', IdCliente: results.insertId });
      }
    });
};
  
// función para actualizar un documento en la base de datos
exports.updateanuncio = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE anuncio SET ? WHERE IdCliente = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al actualizar el anuncio' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'anuncio actualizado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El anuncio no existe' });
        }
      }
    });
};
  
// función para eliminar un documento de la base de datos
exports.deleteanuncio = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM anuncio WHERE IdCliente = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al eliminar el anuncio' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'anuncio eliminado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El anuncio no existe' });
        }
      }
    });
};

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// función para obtener todos los documentos de la base de datos
exports.getAllarchivoespacio = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM archivoespacio';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el espacio archivado' });
      } else {
        // si no hay error, envía los resultados como una respuesta JSON
        res.status(200).json(results);
      }
    });
};
  
// función para obtener un documento por su id
exports.getByIdEspacioearchivoespacio = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM archivoespacio WHERE IdEspacio = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el espacio archivado' });
      } else {
        // si no hay error, verifica si hay algún resultado
        if (results.length > 0) {
          // si hay un resultado, envía el resultado como una respuesta JSON
          res.status(200).json(results[0]);
        } else {
          // si no hay ningún resultado, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El espacio archivado no existe' });
        }
      }
    });
};
  
// función para crear un documento en la base de datos
exports.createarchivoespacio = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO archivoespacio SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al archivar el espacio' });
      } else {
        // si no hay error, envía un mensaje de éxito con el id del documento creado
        res.status(201).send({ message: 'espacio archivado con éxito', IdEspacio: results.insertId });
      }
    });
};
  
// función para actualizar un documento en la base de datos
exports.updatearchivoespacio = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE archivoespacio SET ? WHERE IdEspacio = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al actualizar el espacio archivado' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'Espacio archivado actualizado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El espacio no está archivado' });
        }
      }
    });
};
  
// función para eliminar un documento de la base de datos
exports.deletearchivoespacio = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM archivoespacio WHERE IdEspacio = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al eliminar el espacio archivado' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'Espacio archivado eliminado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El espacio no está archivado' });
        }
      }
    });
};

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// función para obtener todos los documentos de la base de datos
exports.getAllarchivousuario = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM archivousuario';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el usuario archivado' });
      } else {
        // si no hay error, envía los resultados como una respuesta JSON
        res.status(200).json(results);
      }
    });
};
  
// función para obtener un documento por su id
exports.getByIdUsuarioarchivousuario = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM archivousuario WHERE IdUsuario = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el usuario archivado' });
      } else {
        // si no hay error, verifica si hay algún resultado
        if (results.length > 0) {
          // si hay un resultado, envía el resultado como una respuesta JSON
          res.status(200).json(results[0]);
        } else {
          // si no hay ningún resultado, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El usuario archivado no existe' });
        }
      }
    });
};
  
// función para crear un documento en la base de datos
exports.createarchivousuario = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO archivousuario SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al archivar el usuario' });
      } else {
        // si no hay error, envía un mensaje de éxito con el id del documento creado
        res.status(201).send({ message: 'usuario archivado con éxito', IdUsuario: results.insertId });
      }
    });
};
  
// función para actualizar un documento en la base de datos
exports.updatearchivousuario = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE archivousuario SET ? WHERE IdUsuario = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al actualizar el usuario archivado' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'usuario archivado actualizado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El usuario no está archivado' });
        }
      }
    });
};
  
// función para eliminar un documento de la base de datos
exports.deletearchivousuario = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM archivousuario WHERE IdUsuario = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al eliminar el usuario archivado' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'usuario archivado eliminado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El usuario no está archivado' });
        }
      }
    });
};

//-----------------------------------------------------------------------------------------------------------------------------------------------//
  
// función para obtener todos los documentos de la base de datos
exports.getAllcliente = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM cliente';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el cliente' });
      } else {
        // si no hay error, envía los resultados como una respuesta JSON
        res.status(200).json(results);
      }
    });
};
  
// función para obtener un documento por su id
exports.getByIdCliente = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM cliente WHERE IdCliente = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al obtener el cliente' });
      } else {
        // si no hay error, verifica si hay algún resultado
        if (results.length > 0) {
          // si hay un resultado, envía el resultado como una respuesta JSON
          res.status(200).json(results[0]);
        } else {
          // si no hay ningún resultado, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El cliente no existe' });
        }
      }
    });
};
  
// función para crear un documento en la base de datos
exports.createcliente = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO cliente SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al crear el cliente' });
      } else {
        // si no hay error, envía un mensaje de éxito con el id del documento creado
        res.status(201).send({ message: 'cliente creado con éxito', IdCliente: results.insertId });
      }
    });
};
  
// función para actualizar un documento en la base de datos
exports.updatecliente = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE cliente SET ? WHERE IdCliente = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al actualizar el cliente' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'cliente actualizado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El cliente no existe' });
        }
      }
    });
};
  
// función para eliminar un documento de la base de datos
exports.deletecliente = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM cliente WHERE IdCliente = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
      if (err) {
        // si hay un error, envía un mensaje de error
        res.status(500).send({ message: 'Error al eliminar el cliente' });
      } else {
        // si no hay error, verifica si se afectó alguna fila
        if (results.affectedRows > 0) {
          // si se afectó alguna fila, envía un mensaje de éxito
          res.status(200).send({ message: 'cliente eliminado con éxito' });
        } else {
          // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
          res.status(404).send({ message: 'El cliente no ese pudo eliminar' });
        }
      }
    });
};

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// función para obtener todos los documentos de la base de datos
exports.getAlldenuncia = (req, res) => {
  // consulta SQL para seleccionar todos los documentos
  var sql = 'SELECT * FROM denuncia';
  // ejecuta la consulta
  connection.query(sql, (err, results) => {
    if (err) {
      // si hay un error, envía un mensaje de error
      res.status(500).send({ message: 'Error al obtener la denuncia' });
    } else {
      // si no hay error, envía los resultados como una respuesta JSON
      res.status(200).json(results);
    }
  });
};

// función para obtener un documento por su id
exports.getByIdUsuariodenuncia = (req, res) => {
  // obtiene el id del documento desde el parámetro de la ruta
  var id = req.params.id;
  // consulta SQL para seleccionar el documento con el id dado
  var sql = 'SELECT * FROM denuncia WHERE IdUsuario = ?';
  // ejecuta la consulta con el id como un valor de sustitución
  connection.query(sql, [id], (err, results) => {
    if (err) {
      // si hay un error, envía un mensaje de error
      res.status(500).send({ message: 'Error al obtener la denuncia' });
    } else {
      // si no hay error, verifica si hay algún resultado
      if (results.length > 0) {
        // si hay un resultado, envía el resultado como una respuesta JSON
        res.status(200).json(results[0]);
      } else {
        // si no hay ningún resultado, envía un mensaje de que el documento no existe
        res.status(404).send({ message: 'La denuncia no existe' });
      }
    }
  });
};

// función para crear un documento en la base de datos
exports.createdenuncia = (req, res) => {
  // obtiene los datos del documento desde el cuerpo de la petición
  var data = req.body;
  // consulta SQL para insertar el documento en la tabla
  var sql = 'INSERT INTO denuncia SET ?';
  // ejecuta la consulta con los datos como un valor de sustitución
  connection.query(sql, [data], (err, results) => {
    if (err) {
      // si hay un error, envía un mensaje de error
      res.status(500).send({ message: 'Error al crear la denuncia' });
    } else {
      // si no hay error, envía un mensaje de éxito con el id del documento creado
      res.status(201).send({ message: 'denuncia creada con éxito', IdUsuario: results.insertId });
    }
  });
};

// función para actualizar un documento en la base de datos
exports.updatedenuncia = (req, res) => {
  // obtiene el id del documento desde el parámetro de la ruta
  var id = req.params.id;
  // obtiene los datos del documento desde el cuerpo de la petición
  var data = req.body;
  // consulta SQL para actualizar el documento con el id dado
  var sql = 'UPDATE denuncia SET ? WHERE IdUsuario = ?';
  // ejecuta la consulta con los datos y el id como valores de sustitución
  connection.query(sql, [data, id], (err, results) => {
    if (err) {
      // si hay un error, envía un mensaje de error
      res.status(500).send({ message: 'Error al actualizar la denuncia' });
    } else {
      // si no hay error, verifica si se afectó alguna fila
      if (results.affectedRows > 0) {
        // si se afectó alguna fila, envía un mensaje de éxito
        res.status(200).send({ message: 'denuncia actualizada con éxito' });
      } else {
        // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
        res.status(404).send({ message: 'La denuncia no existe' });
      }
    }
  });
};

// función para eliminar un documento de la base de datos
exports.deletedenuncia = (req, res) => {
  // obtiene el id del documento desde el parámetro de la ruta
  var id = req.params.id;
  // consulta SQL para eliminar el documento con el id dado
  var sql = 'DELETE FROM denuncia WHERE IdUsuario = ?';
  // ejecuta la consulta con el id como un valor de sustitución
  connection.query(sql, [id], (err, results) => {
    if (err) {
      // si hay un error, envía un mensaje de error
      res.status(500).send({ message: 'Error al eliminar la denuncia' });
    } else {
      // si no hay error, verifica si se afectó alguna fila
      if (results.affectedRows > 0) {
        // si se afectó alguna fila, envía un mensaje de éxito
        res.status(200).send({ message: 'denuncia eliminada con éxito' });
      } else {
        // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
        res.status(404).send({ message: 'La denuncia no ese pudo eliminar' });
      }
    }
  });
};

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// función para obtener todos los documentos de la base de datos
exports.getAllespacio = (req, res) => {
  // consulta SQL para seleccionar todos los documentos
  var sql = 'SELECT * FROM espacio';
  // ejecuta la consulta
  connection.query(sql, (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el espacio' });
    } else {
    // si no hay error, envía los resultados como una respuesta JSON
    res.status(200).json(results);
    }
  });
};

// función para obtener un documento por su id
exports.getByIdEspacio = (req, res) => {
  // obtiene el id del documento desde el parámetro de la ruta
  var id = req.params.id;
  // consulta SQL para seleccionar el documento con el id dado
  var sql = 'SELECT * FROM espacio WHERE IdEspacio = ?';
  // ejecuta la consulta con el id como un valor de sustitución
  connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el espacio' });
    } else {
      // si no hay error, verifica si hay algún resultado
      if (results.length > 0) {
        // si hay un resultado, envía el resultado como una respuesta JSON
        res.status(200).json(results[0]);
      } else {
        // si no hay ningún resultado, envía un mensaje de que el documento no existe
        res.status(404).send({ message: 'El espacio no existe' });
      }
    }
  });
};

// función para crear un documento en la base de datos
exports.createespacio = (req, res) => {
  // obtiene los datos del documento desde el cuerpo de la petición
  var data = req.body;
  // consulta SQL para insertar el documento en la tabla
  var sql = 'INSERT INTO espacio SET ?';
  // ejecuta la consulta con los datos como un valor de sustitución
  connection.query(sql, [data], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al crear el espacio' });
    } else {
      // si no hay error, envía un mensaje de éxito con el id del documento creado
      res.status(201).send({ message: 'espacio creado con éxito', IdEspacio: results.insertId });
    }
  });
};

// función para actualizar un documento en la base de datos
exports.updateespacio = (req, res) => {
  // obtiene el id del documento desde el parámetro de la ruta
  var id = req.params.id;
  // obtiene los datos del documento desde el cuerpo de la petición
  var data = req.body;
  // consulta SQL para actualizar el documento con el id dado
  var sql = 'UPDATE espacio SET ? WHERE IdEspacio = ?';
  // ejecuta la consulta con los datos y el id como valores de sustitución
  connection.query(sql, [data, id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al actualizar el espacio' });
    } else {
      // si no hay error, verifica si se afectó alguna fila
      if (results.affectedRows > 0) {
        // si se afectó alguna fila, envía un mensaje de éxito
        res.status(200).send({ message: 'espacio actualizado con éxito' });
      } else {
        // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
        res.status(404).send({ message: 'El espacio no existe' });
      }
    }
  });
};

// función para eliminar un documento de la base de datos
exports.deleteespacio = (req, res) => {
  // obtiene el id del documento desde el parámetro de la ruta
  var id = req.params.id;
  // consulta SQL para eliminar el documento con el id dado
  var sql = 'DELETE FROM espacio WHERE IdEspacio = ?';
  // ejecuta la consulta con el id como un valor de sustitución
  connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al eliminar el espacio' });
    } else {
      // si no hay error, verifica si se afectó alguna fila
      if (results.affectedRows > 0) {
        // si se afectó alguna fila, envía un mensaje de éxito
        res.status(200).send({ message: 'espacio eliminado con éxito' });
      } else {
        // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
        res.status(404).send({ message: 'El espacio no ese pudo eliminar' });
      }
    }
  });
};

//-----------------------------------------------------------------------------------------------------------------------------------------------//

// función para obtener todos los documentos de la base de datos
exports.getAllfacturacion = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM facturacion';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
      if (err) {
      // si hay un error, envía un mensaje de error
      res.status(500).send({ message: 'Error al obtener la factura' });
      } else {
        // si no hay error, envía los resultados como una respuesta JSON
        res.status(200).json(results);
      }
    });
};
    
    // función para obtener un documento por su id
    exports.getByNivelMembresiafacturacion = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM facturacion WHERE NivelMembresia = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener la factura' });
    } else {
    // si no hay error, verifica si hay algún resultado
    if (results.length > 0) {
      // si hay un resultado, envía el resultado como una respuesta JSON
      res.status(200).json(results[0]);
    } else {
      // si no hay ningún resultado, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'La factura no existe' });
    }
    }
    });
    };
    
    // función para crear un documento en la base de datos
    exports.createfacturacion = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO facturacion SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al crear la facturacion' });
    } else {
    // si no hay error, envía un mensaje de éxito con el id del documento creado
    res.status(201).send({ message: 'Factura creada con éxito', NivelMembresiafacturacion: results.insertId });
    }
    });
    };
    
    // función para actualizar un documento en la base de datos
    exports.updatefacturacion = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE facturacion SET ? WHERE NivelMembresia = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al actualizar la factura' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'facturacion actualizada con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'La factura no existe' });
    }
    }
    });
    };
    
    // función para eliminar un documento de la base de datos
    exports.deletefacturacion = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM facturacion WHERE NivelMembresia = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al eliminar la factrua' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'Factura eliminada con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'la factrua no ese pudo eliminar' });
    }
    }
    });
    };

//-----------------------------------------------------------------------------------------------------------------------------------------------//
    
  // función para obtener todos los documentos de la base de datos
  exports.getAllforo = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM foro';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el foro' });
    } else {
    // si no hay error, envía los resultados como una respuesta JSON
    res.status(200).json(results);
    }
    });
    };
    
    // función para obtener un documento por su id
    exports.getByNivelMembresiaforo = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM foro WHERE NivelMembresia = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el foro' });
    } else {
    // si no hay error, verifica si hay algún resultado
    if (results.length > 0) {
      // si hay un resultado, envía el resultado como una respuesta JSON
      res.status(200).json(results[0]);
    } else {
      // si no hay ningún resultado, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'Su contenido en el foro no existe' });
    }
    }
    });
    };
    
    // función para crear un documento en la base de datos
    exports.createforo = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO foro SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al crear el foro' });
    } else {
    // si no hay error, envía un mensaje de éxito con el id del documento creado
    res.status(201).send({ message: 'Foro creado con éxito', NivelMembresiaforo: results.insertId });
    }
    });
    };
    
    // función para actualizar un documento en la base de datos
    exports.updateforo = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE foro SET ? WHERE NivelMembresia = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al actualizar el foro' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'foro actualizado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El foro no existe' });
    }
    }
    });
    };
    
    // función para eliminar un documento de la base de datos
    exports.deleteforo = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM foro WHERE NivelMembresia = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al eliminar el foro' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'Foro eliminado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El foro no ese pudo eliminar' });
    }
    }
    });
    };

//-----------------------------------------------------------------------------------------------------------------------------------------------//

    // función para obtener todos los documentos de la base de datos
  exports.getAllmiembro = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM miembro';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el miembro' });
    } else {
    // si no hay error, envía los resultados como una respuesta JSON
    res.status(200).json(results);
    }
    });
    };
    
    // función para obtener un documento por su id
    exports.getByNivelMembresia = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM miembro WHERE NivelMembresia = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el miembro' });
    } else {
    // si no hay error, verifica si hay algún resultado
    if (results.length > 0) {
      // si hay un resultado, envía el resultado como una respuesta JSON
      res.status(200).json(results[0]);
    } else {
      // si no hay ningún resultado, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El miembro no existe' });
    }
    }
    });
    };
    
    // función para crear un documento en la base de datos
    exports.createmiembro = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO miembro SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al crear el miembro' });
    } else {
    // si no hay error, envía un mensaje de éxito con el id del documento creado
    res.status(201).send({ message: 'miembro creado con éxito', NivelMembresia: results.insertId });
    }
    });
    };
    
    // función para actualizar un documento en la base de datos
    exports.updatemiembro = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE miembro SET ? WHERE NivelMembresia = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al actualizar el miembro' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'miembro actualizado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El miembro no existe' });
    }
    }
    });
    };
    
    // función para eliminar un documento de la base de datos
    exports.deletemiembro = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM miembro WHERE NivelMembresia = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al eliminar el miembro' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'miembro eliminado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El miembro no ese pudo eliminar' });
    }
    }
    });
    };

//-----------------------------------------------------------------------------------------------------------------------------------------------//

    // función para obtener todos los documentos de la base de datos
  exports.getAllresponsableshair = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM responsableshair';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el responsableshair' });
    } else {
    // si no hay error, envía los resultados como una respuesta JSON
    res.status(200).json(results);
    }
    });
    };
    
    // función para obtener un documento por su id
    exports.getByIdResponsableShair = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM responsableshair WHERE IdResponsableShair = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el responsableshair' });
    } else {
    // si no hay error, verifica si hay algún resultado
    if (results.length > 0) {
      // si hay un resultado, envía el resultado como una respuesta JSON
      res.status(200).json(results[0]);
    } else {
      // si no hay ningún resultado, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El responsableshair no existe' });
    }
    }
    });
    };
    
    // función para crear un documento en la base de datos
    exports.createresponsableshair = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO responsableshair SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al crear el responsableshair' });
    } else {
    // si no hay error, envía un mensaje de éxito con el id del documento creado
    res.status(201).send({ message: 'responsableshair creado con éxito', IdResponsableShair: results.insertId });
    }
    });
    };
    
    // función para actualizar un documento en la base de datos
    exports.updateresponsableshair = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE responsableshair SET ? WHERE IdResponsableShair = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al actualizar el responsableshair' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'responsableshair actualizado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El responsableshair no existe' });
    }
    }
    });
    };
    
    // función para eliminar un documento de la base de datos
    exports.deleteresponsableshair = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM responsableshair WHERE IdResponsableShair = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al eliminar el responsableshair' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'responsableshair eliminado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El responsableshair no ese pudo eliminar' });
    }
    }
    });
    };

//-----------------------------------------------------------------------------------------------------------------------------------------------//
    
    // función para obtener todos los documentos de la base de datos
  exports.getAllusuario = (req, res) => {
    // consulta SQL para seleccionar todos los documentos
    var sql = 'SELECT * FROM usuario';
    // ejecuta la consulta
    connection.query(sql, (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el usuario' });
    } else {
    // si no hay error, envía los resultados como una respuesta JSON
    res.status(200).json(results);
    }
    });
    };
    
    // función para obtener un documento por su id
    exports.getByIdUsuario = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para seleccionar el documento con el id dado
    var sql = 'SELECT * FROM usuario WHERE IdUsuario = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al obtener el usuario' });
    } else {
    // si no hay error, verifica si hay algún resultado
    if (results.length > 0) {
      // si hay un resultado, envía el resultado como una respuesta JSON
      res.status(200).json(results[0]);
    } else {
      // si no hay ningún resultado, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El usuario no existe' });
    }
    }
    });
    };
    
    // función para crear un documento en la base de datos
    exports.createusuario = (req, res) => {
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para insertar el documento en la tabla
    var sql = 'INSERT INTO usuario SET ?';
    // ejecuta la consulta con los datos como un valor de sustitución
    connection.query(sql, [data], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al crear el usuario' });
    } else {
    // si no hay error, envía un mensaje de éxito con el id del documento creado
    res.status(201).send({ message: 'usuario creado con éxito', IdUsuario: results.insertId });
    }
    });
    };
    
    // función para actualizar un documento en la base de datos
    exports.updateusuario = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // obtiene los datos del documento desde el cuerpo de la petición
    var data = req.body;
    // consulta SQL para actualizar el documento con el id dado
    var sql = 'UPDATE usuario SET ? WHERE IdUsuario = ?';
    // ejecuta la consulta con los datos y el id como valores de sustitución
    connection.query(sql, [data, id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al actualizar el usuario' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'usuario actualizado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El usuario no existe' });
    }
    }
    });
    };
    
    // función para eliminar un documento de la base de datos
    exports.deleteusuario = (req, res) => {
    // obtiene el id del documento desde el parámetro de la ruta
    var id = req.params.id;
    // consulta SQL para eliminar el documento con el id dado
    var sql = 'DELETE FROM usuario WHERE IdUsuario = ?';
    // ejecuta la consulta con el id como un valor de sustitución
    connection.query(sql, [id], (err, results) => {
    if (err) {
    // si hay un error, envía un mensaje de error
    res.status(500).send({ message: 'Error al eliminar el usuario' });
    } else {
    // si no hay error, verifica si se afectó alguna fila
    if (results.affectedRows > 0) {
      // si se afectó alguna fila, envía un mensaje de éxito
      res.status(200).send({ message: 'usuario eliminado con éxito' });
    } else {
      // si no se afectó ninguna fila, envía un mensaje de que el documento no existe
      res.status(404).send({ message: 'El usuario no ese pudo eliminar' });
    }
    }
    });
    };