//Sincrona y Asincrona

const fs = require("fs");
//Leer un archivo
//EJECUCION ASINCRONA
/*
console.log("Iniciado");
let archivo = "data.txt";
let formato = "utf-8";

fs.readFile(archivo, formato, (error, data)=>{
    if (error){
        console.error(`Error ${error}`);
    }
    else{
        console.log(data);
    }
});
console.log("Finalizado");
*/

//La lectura del archivo se realiza de manera Asyncrona, de modo que se muestra primero "Iniciado", "Finalizado" y luego el contenido del archivo
//Para trabajar con una lectura de archivos de manera Sincrona se utiliza la funcion fs.readFileSync

//EJECUCION SINCRONA !!!
/*
console.log("Iniciado");
let archivo = "data.txt";
let formato = "utf-8";
let data = fs.readFileSync(archivo, formato); //Cuando el archivo se lee de manera síncrona, no require de un callBack para leer los datos. 
console.log(data);
console.log("Terminado");
*/

//Procesamiento asíncrono: Permite ejecutar diferentes operaciones en un mismo espacio de tiempo.
//Procesamiento síncrono: Debe ejecutarse una operacion inmediatamente después de la otra. (no en el mismo espacio de tiempo).

/*
let archivoTexto = "data.txt";
let archivoRenombrado = "archivo.txt";

//Se puede utilizar fs.rename (Método Asíncrono)
//Se puede utilizar fs.renameSync (Mètodo Síncrono) //No requiere de un callback
fs.rename(archivoTexto, archivoRenombrado, (error) => {
    if (error)throw error;
    console.log("Renombrado");
});

fs.appendFile(archivoTexto, "CONTENIDO ADICIONAL QUE DEBE SER AGREGADO AL ARCHIVO", (error) => {
    if (error) { console.err(`ERROR: ${error}`); }
});

fs.unlink(archivoRenombrado, (error) => {
    if (error){ throw error; }
    console.log("Eliminado");
});
*/

//Copiar el contenido de un archivo en el contenido de otro archivo.
//Se erlaiza a traves de la funcion createReadStream. (Ver documentacion)
/*
let archivo1 = "data.txt";
let archivo2 = "nuevo_archivo.txt";
fs.createReadStream(archivo1).pipe(fs.createWriteStream(archivo2));
*/

//Para leer el contenido de un directorio(carpeta) de forma asincrona
/*
fs.readdir("../../Tutorial NodeJS", (error, files) => {
    if (error) { throw error; }
    files.forEach(file => {
        console.log(file);
    });
});
*/

//Para leer el contenido de un directorio(carpeta) de forma sincrona
fs.readdirSync("../../Tutorial NodeJS").forEach(file => {
        console.log(file);    
});







