const { boolean } = require('yargs');

const argv = require('yargs')
            .option('b', {
                alias: 'base',
                type: 'number',
                demandOption: true,
                describe: 'Es la base de la tabla de multiplicar'
            })
            .check( (argv, options) => {
                console.log('yargs', argv);
                if (isNaN(argv.b)) {
                    throw 'La base tiene que ser un número'
                }
                return true;
            } )
            .option('l', {
                alias: 'listar',
                type: 'boolean',
                demandOption: false,
                default: false,
                describe: 'Imprime la tabla'
            })
            .option('h',{
                alias: 'hasta',
                type: 'number',
                demandOption: false,
                default: 10
            })
            .argv;

module.exports = argv;