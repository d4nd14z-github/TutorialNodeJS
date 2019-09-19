'use strict'

/*** Se va a importar otro archivo externo desde este mismo archivo */
const myarchivo = require("./otroarchivo");
//const { suscriptores } = require("./otroarchivo"); //Se importa unicamente la variable suscriptores desde el archivo externo
//const { saludar } = require("./otroarchivo");       //Se importa unicamente la funcion saludar desde el archivo externo

//Imprimir desde la importacion completa del archivo
//console.log (myarchivo.suscriptores);
//console.log(myarchivo.saludar("Daniel"));

//Imprimir desde la importacion de la variable unicamente
console.log("Suscriptores: " + myarchivo.suscriptores);
console.log("Saludo: " + myarchivo.saludar("Daniel"));

