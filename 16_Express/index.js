const express = require("express");
const app = express();

//Middleware: Ejecuciones que se realizan antes de que regrese la respuesta de la peticion al browser.
//            practicamente se va a ejecutar como un interceptador entre las peticiones.               

let isLogin = () => true;

let logger = (req, res, next) => {
    console.log("Peticion de tipo:  ", req.method);
    next();
}


app.use((req, res, next) => {
    if (isLogin()){
        next(); //El metodo next me indica que continue con lo que estaba haciendo luego de haber llamado al interceptor.
    }
    else{
        res.send("No estás logueado");
    }
});

app.use(logger);  //Añado otro interceptor adicional al anterior

//Especificar el motor de plantillas que se va a utilizar
app.set("view engine", "pug");



//Rutas 
app.get("/", (req, res)=>{
    let method = req.method; //Conocer el metodo por el que fue invocado la ruta. (GET, POST, PUT, DELETE, PATCH)    
    //res.send(method);
    res.send(`Hello World ! ${req.method}`);
});

app.listen(3000,() => {
    console.log("Example app listening on port 3000!");
});
