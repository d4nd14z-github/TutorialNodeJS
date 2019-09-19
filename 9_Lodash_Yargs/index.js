'use strict'

const lodash = require("lodash");
const argv = require ("yargs").argv; //obtiene de una vez los valores recibidos por parametro

/*
let x = { "nombre" : "Daniel" };
let y = { "apodo" : "d4nd14z" };
let z = [
    { nombre : "Daniel", apellido : "Diaz", edad : 38 },
    { nombre : "Ingrid", apellido : "Gomez", edad : 35 }    
];
*/

//concatenar los valores de x y y en un unico JSON usando Lodash
//let resultado = lodash.assign(x,y);
//console.log(resultado);

//bucle for
/*
lodash.times(3, () => {
    console.log("Repetir en lodash sin usar bucle for");
});
*/

//Buscar objetos dentro una coleccion de objetos utilizando lodash
/*
let resultado = lodash.find(z, {nombre : "Ingrid"});
console.log(resultado);
*/

//YARGS
//La libreria yargs se encarga de recibir los parámetros que se envian junto a la ejecucion del script node index.js
//permite procesar los parametros de entrada en la consola
//let comando = process.argv;
//console.log(comando);

//Envio parametros a traves del comando de ejecucion node index.js {parametro2} {parametro3} {parametro4}
//console.log(argv.argv);

//let comando = process.argv[2];
/***
if (argv.usuario === 'usuario'){
    if (argv.nombre === 'daniel'){
        let x = { "nombre" : "Daniel" };
        let y = { "apodo" : "d4nd14z" };
        let z = [
            { nombre : "Daniel", apellido : "Diaz", edad : 38 },
            { nombre : "Ingrid", apellido : "Gomez", edad : 35 }    
        ];
        let resultado = lodash.find(z,{nombre:"Ingrid"});
        console.log(resultado);
    }
    else{
        console.error("Usuario no válido");
    }
}
***/

//console.log(argv.argv);
if (argv.user==='usuario'){
    if (argv.passwd==='password'){
        let x = { "nombre" : "Daniel" };
        let y = { "apodo" : "d4nd14z" };
        let z = [
            { nombre : "Daniel", apellido : "Diaz", edad : 38 },
            { nombre : "Ingrid", apellido : "Gomez", edad : 35 }    
        ];
        let resultado = lodash.find(z,{nombre:"Ingrid"});
        console.log(resultado);
    }    
}
else{
    console.error("Usuario no válido");
}