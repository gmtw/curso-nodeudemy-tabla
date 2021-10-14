const { option } = require('yargs');
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs.js');

const colors = require('colors');


console.clear();

crearArchivo(argv.base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'.strikethrough.red))
            .catch((err) => console.log(err));

