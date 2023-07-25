/* Requiriendo librerías */
const express = require('express');
const path = require('path');
const app = express();

/* Levantando el servidor */
app.listen(3030, () => {
    console.log("¡Servidor en línea! :D");
});

/* Devolviendo las páginas al navegador */
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'/views/home.html'));
});

/* Declarando ubicación de archivos estáticos */
app.use(express.static('public'));