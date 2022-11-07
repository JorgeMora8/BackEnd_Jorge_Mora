import { inicioServidor } from "./IniciarServidor.js";

const PORT = 8080

try {
    inicioServidor(PORT); 
    console.log(`Levantando el servidor por medio del puerto: ${PORT}`)
} catch (error) {
    console.log(error)
}




