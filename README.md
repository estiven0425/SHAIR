# SHAIR
Proyecto SHAIR de tecnología en análisis y desarrollo e software SENA

 - Notas importantes
      SELECT
          c.id_creador,
          c.nombre AS nombre_creador,
          p.id_producto,
          p.nombre AS nombre_producto,
          a.id_archivo,
          a.archivo_producto
      FROM creador c
      INNER JOIN producto p ON c.id_creador = p.id_creador
      INNER JOIN archivo a ON p.id_producto = a.id_producto
      WHERE c.id_creador = 87;  
     - Esta consulta nos trae creador, con productos y archivos de esos productos

     - Se debe cambiar en mysql.ini max_allowed_packet = 100M

     - Se debe crear espacios en lugar de productos, se debe reestructurar la base de datos (la versión 1.2 está por llegar)
