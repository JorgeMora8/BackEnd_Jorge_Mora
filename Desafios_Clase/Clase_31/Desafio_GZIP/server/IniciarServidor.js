import {app} from "../app/app.js"

export function inicioServidor(PORT) {
    return new Promise((resolve, reject) => {
        const server = app.listen(PORT, ()=>{
           resolve(`Levantando el servidor por medio del puerto: ${PORT}`);  
        })
        
        server.on("error", (error) => console.log(error)); 
        
    })
}