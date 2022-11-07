import express from "express"; 
import compression from "compression";

const app = express(); 

//=>Mensajes a enviar. 
const mensaje = "hola que tal"; 
const mensajeRepetido = mensaje.repeat(1000); 

app.get("/saludo", (req,res) => {
    res.json({Mensaje: mensaje}); 
})

app.get("/saludoZip",compression(), (req,res) => {
    res.send({Mensaje_Largo:mensajeRepetido}); 
})

export {app}