/* Requiriendo librerías */
let express = require('express');
let path = require('path');
let app = express();
const PORT = process.env.PORT || 8080;

let mainRoutes = require("./routes/main");

/* Declarando ubicación de archivos estáticos */
app.use(express.static(path.join(__dirname,"../public")));

/** Configurando ejs como motor de renderizado */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"./views"));

/* Usando las rutas */
app.use('/', mainRoutes);

/* Levantando el servidor */
app.listen(8080, () => {
    console.log("¡Servidor en línea! :D");
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});