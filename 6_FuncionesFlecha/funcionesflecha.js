'use strict';

let suscriptores = 22000;

module.exports = {

    subs : suscriptores,
    saludar : (nombre) => {                                         //Exportar la funcion
        let string = "";
        let today = new Date();
        let hour = parseInt(today.getHours());    
        (hour<12)?string="buenos días, ":string="buenas tardes, ";    
        console.log("Hola. Muy " + string + nombre + ".");
    },
    sumar : (param1, param2) => {
        return param1 + param2;
    }
}