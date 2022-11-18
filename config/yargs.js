const { describe } = require('yargs');

//Utilizar YARGS - Ingreso de datos desde consola
const argv = require('yargs')
                            .option('b', { //Permite llamarlo desde --b=2  o --base=1
                                alias: 'base',
                                type: 'number',
                                demandOption: true, //Campo requerido
                                describe: 'Es la base de la tabla para multiplicar'
                            })
                            .option('c', {
                                alias: 'listar',
                                type: 'boolean',
                                default: false
                            })
                            .check( (argv, options) => {
                                    if(isNaN(argv.b))
                                    {
                                        throw '(Validation) Error: La base debe de ser un numero';
                                    }
                                    return true;
                            } )
                            .argv;


//Para exportar este contenido

module.exports = argv;