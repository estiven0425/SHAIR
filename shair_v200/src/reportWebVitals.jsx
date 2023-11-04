// Archivo de configuración relacionado con PWA
const reportWebVitals = onPerfEntry => { //Se define una función llamada reportWebVitals que toma un argumento llamado onPerfEntry, que es una función.
  
  if (onPerfEntry && onPerfEntry instanceof Function) { //Se verifica si onPerfEntry existe y es una función antes de continuar.
    
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => { //Se importan funciones específicas relacionadas con métricas de rendimiento desde el módulo 'web-vitals'.
      // Estas funciones se desestructuran en el objeto pasado a 'then'.
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
      //Se ejecutan las funciones importadas, pasando 'onPerfEntry' como argumento, lo que registra métricas de rendimiento.
    });
  }
};

export default reportWebVitals; //La función 'reportWebVitals' se exporta como el valor predeterminado del módulo para su uso en otros lugares.