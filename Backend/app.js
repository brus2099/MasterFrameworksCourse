'use strict'

// Cargar modulos de node para crear servidor
var express = require('express');
var bodyParser = require('body-parser');

// Ejecutar express (http):
var app = express();

// Cargar ficheros rutas
var article_routes = require('./routes/article');

// Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors

// Añadir prefijos a rutas / Cargar rutas
app.use('/api', article_routes);

// Ruta de prueba

/* Funcion pasada a controllers/article.js
app.post('/misDatos', (req, res) => {
    console.log('Hola futuros alumnos!')
    
    var hola = req.body.hola;

    return res.status(200).send({
        curso: 'Master en Frameworks JS',
        estudiante: 'Bruno',
        github: 'brus2099',
        hola
    });
});
*/

// Exportar modulo (fichero actual)
module.exports = app;