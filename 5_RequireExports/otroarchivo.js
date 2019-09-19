let suscriptores = 22000;

/****
module.exports.suscriptores = suscriptores;

module.exports.saludar = (nombre) => {
    let string = "";
    let today = new Date();
    let hour = parseInt(today.getHours());    
    (hour<12)?string="buenos días, ":string="buenas tardes, ";    
    console.log("Hola. Muy " + string + nombre + ".");
};
***/

module.exports = {
    suscriptores : suscriptores,                                    //Exportar la variable
    saludar : (nombre) => {                                         //Exportar la funcion
        let string = "";
        let today = new Date();
        let hour = parseInt(today.getHours());    
        (hour<12)?string="buenos días, ":string="buenas tardes, ";    
        console.log("Hola. Muy " + string + nombre + ".");
    }
}

