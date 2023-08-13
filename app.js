/* Requiriendo librerías */
let express = require('express');
let path = require('path');
let app = express();

const PORT = process.env.PORT || 8080;

let mainRoutes = require("./routes/main");

/* Levantando el servidor */
app.listen(8080, () => {
    console.log("¡Servidor en línea! :D");
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

/* Devolviendo las páginas al navegador */
app.use('/', mainRoutes);

/* Declarando ubicación de archivos estáticos */
app.use(express.static('public'));