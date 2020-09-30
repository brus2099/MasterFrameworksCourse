import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import SimpleReactValidator from 'simple-react-validator'
import swal from 'sweetalert'
import ImageDefault from '../assets/images/default.png'

// Recoger el id del articulo a editar de la url
// Crear metodo para sacar ese objeto del api
// repoblar o rellenar el formulario con esos datos
// actualizar el objeto haciendo una peticion al backend

class EditArticle extends Component {

    articleId = null
    url = Global.url
    titleRef = React.createRef()
    contentRef = React.createRef()

    state = {
        article: {},
        status: null,
        selectedFile: null
    }

    componentWillMount() {

        this.articleId = this.props.match.params.id

        this.getArticle(this.articleId)

        this.validator = new SimpleReactValidator({
            messages: {
                required: 'Este campo es requerido'
            }
        })
    }

    getArticle = (id) => {
        axios.get(this.url + 'article/' + id)
            .then(res => {
                this.setState({
                    article: res.data.article
                })
            })
    }

    changeState = () => {

        this.setState({
            article: {
                title: this.titleRef.current.value,
                content: this.contentRef.current.value,
                image: this.state.article.image
            }
        })

        this.validator.showMessages()
        this.forceUpdate()
    }

    saveArticle = (e) => {

        e.preventDefault()

        // Se rellena el state con formulario
        this.changeState()

        if (this.validator.allValid()) {

            // Hacer una peticion http opr post para guardar el articulo
            axios.put(this.url + 'article/' + this.articleId, this.state.article)
                .then(res => {

                    if (res.data.article) {

                        this.setState({
                            article: res.data.article,
                            status: 'waiting'
                        })

                        swal(
                            'Articulo actualizado!',
                            'El articulo ha sido modificado correctamente.',
                            'success'
                        )

                        // Subida del archivo
                        if (this.state.selectedFile !== null) {

                            // Sacar el id del articulo guardado
                            let articleId = this.state.article._id

                            // Crear form data y añadir fichero
                            const formData = new FormData()
                            formData.append(
                                'file0',
                                this.state.selectedFile,
                                this.state.selectedFile.name
                            )

                            // Peticion AJAX
                            axios.post(this.url + 'upload-image/' + articleId, formData)
                                .then(res => {

                                    if (res.data.article) {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'success'
                                        })
                                    } else {
                                        this.setState({
                                            article: res.data.article,
                                            status: 'failed'
                                        })
                                    }
                                })
                        } else {

                            this.setState({
                                status: 'success'
                            })
                        }
                    } else {

                        this.setState({
                            status: 'failed'
                        })
                    }
                })
        } else {

            this.setState({
                status: 'failed'
            })

            this.validator.showMessages()
            this.forceUpdate()
        }

    }

    fileChange = (event) => {

        this.setState({
            selectedFile: event.target.files[0]
        })
    }

    render() {

        console.log(this.state.article)

        if (this.state.status === 'success') {
            return <Redirect to="/blog" />
        }

        let article = this.state.article

        return (
            <div className="center">
                <section id="content">
                    <h1 className="subheader">Editar articulo</h1>

                    {
                        this.state.article &&

                        <form className="mid-form" onSubmit={this.saveArticle} onChange={this.changeState}>
                            <div className="form-group">
                                <label htmlFor="title">Titulo</label>
                                <input type="text" name="title" defaultValue={article.title} ref={this.titleRef} onChange={this.changeState}/>
                                {this.validator.message('title', this.state.article.title, 'required|alpha_num_space')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Contenido</label>
                                <textarea name="content" defaultValue={article.content} ref={this.contentRef} onChange={this.changeState}></textarea>
                                {this.validator.message('content', this.state.article.content, 'required')}
                            </div>
                            <div className="form-group">
                                <label htmlFor="file0" id="add-image">Imagen</label>
                                <input type="file" name="file0" onChange={this.fileChange} className="img-submit" />
                                <div className="image-wrap">
                                    {
                                        article.image !== null ? (
                                            <img src={this.url + 'get-image/' + article.image} alt={article.title} className="thumb" />
                                        ) : (
                                                <img src={ImageDefault} alt={article.title} className="thumb" />
                                            )
                                    }
                                </div>
                            </div>

                            <input type="submit" value="Guardar" className="btn btn-success" />
                        </form>
                    }

                </section>

                <Sidebar />

            </div>
        )
    }
}

export default EditArticle