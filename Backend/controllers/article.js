'use strict'

var validator = require('validator')
var fs = require('fs')
var path = require('path')

var Article = require('../models/article')

var controller = {

    datosCurso: (req, res) => {
        console.log('Hola futuros alumnos!')

        var hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            estudiante: 'Bruno',
            github: 'brus2099',
            hola
        });
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Esta es la accion test de controller articulos'
        });
    },

    save: (req, res) => {
        // Recoger parametros por post
        var params = req.body

        // Validar datos (validator)
        try {
            var validate_title = !validator.isEmpty(params.title)
            var validate_content = !validator.isEmpty(params.content)
        } catch (err) {
            return res.status(200).send({
                status: `error`,
                message: `Error: ${err}`
            });
        }

        if (validate_title && validate_content) {
            //Crear el objeto a guardar
            var article = new Article()

            // Asignar valores
            article.title = params.title
            article.content = params.content
            article.image = null

            // Guardar el articulos
            article.save((err, articleStored) => {

                if (err || !articleStored) {
                    return res.status(404).send({
                        status: `error`,
                        message: `El articulo no se ha guardado!!!`
                    });
                }
                // Devolver una respuesta
                return res.status(200).send({
                    status: 'success',
                    article: articleStored
                });
            });

        } else {
            return res.status(200).send({
                status: `error`,
                message: `Los datos no son validos`
            });
        }
    },

    getArticles: (req, res) => {

        var query = Article.find({})

        var last = req.params.last
        if (last || last != undefined) {
            query.limit(5);
        }

        // Find 
        query.sort('-_id').exec((err, articles) => {

            if (err) {
                return res.status(500).send({
                    status: `error`,
                    message: `Error al devolver los articulos.`
                })
            }

            if (!articles) {
                return res.status(404).send({
                    status: `error`,
                    message: `No hay articulos para mostrar.`
                })
            }

            return res.status(200).send({
                status: `success`,
                articles
            })
        })

    },

    getArticle: (req, res) => {

        // Recoger id de la url
        var articleId = req.params.id

        // Comprobar que existe
        if (!articleId || articleId == null) {
            return res.status(404).send({
                status: `error`,
                message: 'No existe el articulo buscado'
            })
        }

        // Buscar el articulo
        Article.findById(articleId, (err, article) => {

            if (err || !article) {
                return res.status(404).send({
                    status: `error`,
                    message: 'No existe el articulo buscado'
                })
            }
            // Devolver el json
            return res.status(200).send({
                status: `success`,
                article
            })
        })
    },

    update: (req, res) => {

        // Recoger id del articulos
        var articleId = req.params.id

        // Recoger los datos que llegan por PUT
        var params = req.body

        // Validar datos
        try {
            var validate_title = !validator.isEmpty(params.title)
            var validate_content = !validator.isEmpty(params.content)
        } catch (err) {
            return res.status(200).send({
                status: `error`,
                message: 'Faltan datos por enviar'
            })
        }

        if (validate_title && validate_content) {
            // Find and update
            Article.findByIdAndUpdate({ _id: articleId }, params, { new: true }, (err, articleUpdated) => {
                if (err) {
                    return res.status(500).send({
                        status: `error`,
                        message: 'error al actualizar'
                    })
                }

                if (!articleUpdated) {
                    return res.status(404).send({
                        status: `error`,
                        message: 'no existe el articulo'
                    })
                }

                return res.status(200).send({
                    status: `success`,
                    article: articleUpdated
                })
            })
        } else {
            // Devolver respuesta
            return res.status(500).send({
                status: `error`,
                message: 'La validacion de datos no es correcta'
            })
        }
    },

    delete: (req, res) => {

        // Recoger id de la url
        var articleId = req.params.id

        // Find and delete
        Article.findOneAndDelete({ _id: articleId }, (err, articleRemoved) => {
            if (err) {
                return res.status(500).send({
                    status: `error`,
                    message: 'ERROR AL BORRAR'
                })
            }

            if (err) {
                return res.status(404).send({
                    status: `error`,
                    message: 'no se ha borrado el articulo, posiblemente no exista'
                })
            }

            return res.status(200).send({
                status: `success`,
                article: articleRemoved
            })

        })

        return res.status(500).send({
            status: `error`,
            message: 'metodo delete'
        })
    },

    upload: (req, res) => {

        // Configurar el modulo del conect multiparty router/article.js

        // Recoger el fichero de la peticien que enviemos
        var file_name = 'Immagen no subida...'

        if (!req.files) {
            return res.status(404).send({
                status: 'error',
                message: file_name
            })
        }

        // Conseguir el nombre y extension del archivo
        var file_path = req.files.file0.path
        var file_split = file_path.split('\\')

        // LINUX/MAC ADVERTENCIA  -
        // var file_split = file_path.split('/')

        // Nombre del archivo
        var file_name = file_split[2]

        // Estension del archivo
        var extension_split = file_name.split('\.')
        var file_ext = extension_split[1]

        // Comprobar la extension, solo imagenes, si no es valido borrar el fichero
        if (file_ext != 'png' && file_ext != 'jpg' && file_ext != 'gif' && file_ext != 'jpeg') {

            // Borrar el archivo subido
            fs.unlink(file_path, (err) => {
                return res.status(200).send({
                    status: 'error',
                    message: 'extension de imagen no valida'
                })
            })
        } else {
            // Si todo es valido, se saca id de la url
            var articleId = req.params.id

            // Buscar articulo, asignarle el nombre de la imagen y actualizarlo
            Article.findOneAndUpdate({ _id: articleId }, { image: file_name }, { new: true }, (err, articleUpdated) => {

                if (err || !articleUpdated) {
                    return res.status(200).send({
                        status: 'error',
                        message: 'error al guardar la imagen del articulo',
                        err, articleUpdated
                    })
                }

                return res.status(200).send({
                    status: 'success',
                    article: articleUpdated
                })

            })
        }

    }, // end upload file

}; // end controller

module.exports = controller;
