
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log(process.argv);
console.log(argv);

console.log('Base yargs: ', argv.base);

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;


crearArchivo(base, listar, hasta)
.then( nombreArchivo => console.log(nombreArchivo.rainbow, 'creado') )
.catch( err => console.log(err) );

// const [ , , arg3 = 'base=5'] = process.argv;
// const [ , base=5 ] = arg3.split('=');

//const base = 6;

// crearArchivo(base)
//     .then( nombreArchivo => console.log(nombreArchivo, 'creado') )
//     .catch( err => console.log(err) );

// console.log(base);

// (err) => {
//     if (err) throw err;

//     console.log(`tabla-${base}.txt creado`);
// })