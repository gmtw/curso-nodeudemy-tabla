

const crearArchivo = (base, listar, hasta=10)=>{
    
    return new Promise((resolve, reject)=>{

        const fs = require('fs');
        
        
        
        let salida = ''
        
        
        for (let i = 1; i <= hasta; i++) {
            
            salida += `${base} x ${i} = ${5 * i}\n`;
            
        };
        
        if (listar) {
            
            console.log('====================='.zebra);
            console.log(`  Tabla del ${base}`.green);
            console.log('====================='.zebra);

        
            console.log(salida.trap.rainbow);
        }

    
        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        

        if (base) {
            resolve(`tabla-${base}.txt`.brightCyan);
        } else {
            reject('No existe base')
        }
    }) 
}

    
module.exports = {
    crearArchivo
}