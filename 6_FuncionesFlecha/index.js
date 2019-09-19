'use strict';

const my = require("./funcionesflecha");

console.log(my.subs);
console.log(my.saludar("Daniel"));
console.log(my.sumar(10,5));

//FuncionesFlecha (Igual a las que ya se han utilizado antes)
//La funcion setTimeout espera una cantidad de tiempo, antes de ejecutar la funcion callback
// setTimeout(function(){}, tiempoEspera); 
//Ejemplo utilizando funciones flecha: 
setTimeout(()=>{
    console.log("Terminé");
}, 2000);