'use strict'

var express = require('express');
var ArticleController = require('../controllers/article');

var router = express.Router();

var multipart = require('connect-multiparty')
var md_upload = multipart({uploadDir: './upload/articles'})


// Rutas de prueba
router.get('/test-de-controlador', ArticleController.test);
router.post('/datos-curso', ArticleController.datosCurso)

// Rutas para articulos
// IMPORTANTE!!!
// GET   -->sacar(leer)
// POST  -->guardar o enviar(crear)
// PUT   -->(actualizar)
// DELETE-->(borrar)

router.post('/save', ArticleController.save);
router.get('/articles/:last?', ArticleController.getArticles)
router.get('/article/:id', ArticleController.getArticle)
router.put('/article/:id', ArticleController.update)
router.delete('/article/:id', ArticleController.delete)

router.post('/upload-image/:id', md_upload, ArticleController.upload)

module.exports = router