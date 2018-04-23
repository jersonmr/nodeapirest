// Inicializando el framework express
const express = require('express');
/* body-parser permite "parsear" los requests entrantes a traves de un middleware
antes de poder manipular los datos */
const bodyParser = require('body-parser');

// Configurando la base de datos
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Conectando a la base de datos
mongoose.connect(dbConfig.url)
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
    }).catch(err => {
        console.log('No pudo conectar con la Base de datos!');
    });

// Creando una instancia de express
const app = express();

// Parseando request de tipo - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Parseando requests of tipo - application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.json({ 'message': 'API REST de usuarios' });
});

// Listando archivo de rutas para los usuarios
require('./app/routes/user.routes')(app);

app.listen(3000, () => {
    console.log('Servidor escuchando el puerto 3000');
});
