// Utilizar la funcion require
// Crear un nuevo directorio para contener el proyecto de node
// crear archivo app.js
// ejecutar con el comando node app.js desde el terminal integrado de VSCode

// unidades de funcionalidades: fragmentos de codigo que contienen funciones

//Segun ECMAScript6 se utiliza: 
// LET:   Para declarar variables en un ambito global
// CONST: Para declarar constantes 

'use strict'

const os = require("os"); //el modulo OS provee un numero de metodos y utilidades relacionadas al sistema operativo

const fs = require("fs"); //el modulo FS provee una API para interactuar con el sistema de archivos de una manera muy cercana al estandar POSIX

let cpu = os.cpus(); //Obtiene informacion del procesador 
let sistema = os.platform(); //Obtiene informacion del Sistema Operativo (Win32)
let usuario = os.hostname(); //Obtiene informacion del Usuario del Sistema Operativo
//console.log(cpu);
//console.log(sistema);
//console.log(usuario);

let nombreArchivo = "archivo.txt";
let contenidoArchivo = "Este es el contenido del archivo que será creado mediante el modulo fs (File System)";

/***
fs.appendFileSync(nombreArchivo, contenidoArchivo, function (error){
    if (error){
        console.error("Error al crear archivo");
    }
}); 
****/

//Utilizando funciones flecha
fs.appendFile(nombreArchivo, contenidoArchivo, (error) => {
    if (error){
        console.error("Error al crear archivo");
    }
});

let nuevoContenido = "\n\n\nInformacion del CPU: \n" + JSON.stringify(cpu);
nuevoContenido += "\nInformacion del Sistema Operativo: \n" + sistema; 
nuevoContenido += "\nInformacion del Usuario: \n" + usuario;
fs.appendFile(nombreArchivo, nuevoContenido, (error) => {
    if (error){
        console.error("Error al crear archivo");
    }
});





