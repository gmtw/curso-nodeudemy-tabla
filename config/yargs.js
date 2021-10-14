const argv = require('yargs').
    options('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Es la base de la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser un número'
        }
        return true;
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: false,
        description: 'Muestra la tabla en pantalla'

    }).options('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        description: 'Muestra lhasta que numero se requiere multiplicar'

    })
    .argv;

module.exports = argv;
