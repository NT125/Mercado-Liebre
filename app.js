/* Requiriendo librerías */
const express = require('express');
const path = require('path');
const app = express();

/* Levantando el servidor */
app.listen(8080, () => {
    console.log("¡Servidor en línea! :D");
    console.log("Servidor corriendo en el puerto 8080");
});

/* Devolviendo las páginas al navegador */
app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/home.html');
});

app.get('/registro', (req,res)=>{
    res.sendFile(__dirname + "/views/register.html");
})

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + "/views/login.html");
})

/* Declarando ubicación de archivos estáticos */
app.use(express.static('public'));