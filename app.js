const { crearArchivoTabla } = require ('./multiplicar.js') 
const argv  = require ('./config/yargs')


// Limpieza de consola
console.clear();
console.log(argv);


// Tabla
let valor = argv.b;

//Usando promesa, manejo con THEN y CATCH
crearArchivoTabla(valor)
.then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
.catch(err => console.log(err));