const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 5, listar, hasta) => {

    //return new Promise( (resolve, reject) => {

    try {
        let salida = '';
        let consola = '';
        
        for (let index = 1; index <= hasta; index++) {
            salida += `${base} ${'x'} ${index} =  ${base*index} \n`;
            consola += `${base} ${'x'.green} ${index} =  ${base*index} \n`;
            
        }
        
        if (listar) {
            console.log('================');
            console.log(`Tabla del: ${colors.green(base)}`);
            console.log('================');
            console.log(consola);
        } else {
            
        }
    
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        //resolve(`tabla-${base}.txt`);
        return `tabla-${base}.txt`;
        
    } catch (err) {
        throw err;
    }

   // })

}


module.exports = {
    //crearArchivo: crearArchivo
    crearArchivo
}