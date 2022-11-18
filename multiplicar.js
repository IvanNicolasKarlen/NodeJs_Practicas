const fs = require('fs');

// Retorno una Promesa
const crearArchivoTabla = async (valor = 5) =>{
    let i = 0;
    let salida = '';

    try{

    for( i; i <= 10; i++ )
    {
        salida += `${valor} x ${i} = ${i * valor} \n`;
    }


    fs.writeFileSync(`tabla-${valor}.txt`, salida);


    return `Tabla ${valor}.txt creado`;

    } catch(error)
    {
        throw error;
    }

}

module.exports = {
    crearArchivoTabla
}
