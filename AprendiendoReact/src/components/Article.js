import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
import axios from 'axios'
import Global from '../Global'
import Sidebar from './Sidebar'
import Moment from 'react-moment'
import 'moment/locale/es'
import ImageDefault from '../assets/images/default.png'
import swal from 'sweetalert'

class Article extends Component {

    url = Global.url

    state = {
        article: false,
        status: null
    }

    componentWillMount() {
        this.getArticle()
    }

    getArticle = () => {
        let id = this.props.match.params.id

        axios.get(this.url + 'article/' + id)
            .then(res => {

                this.setState({
                    article: res.data.article,
                    status: 'success'
                })
            })
            .catch(err => {
                this.setState({
                    article: false,
                    status: 'success'
                })
            })
    }

    deleteArticle = id => {

        swal({
            title: "¿Estas seguro?",
            text: "Una vez eliminado, no podrás recuperar este articulo.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {

                    axios.delete(this.url + 'article/' + id)
                        .then(res => {

                            this.setState({
                                article: res.data.article,
                                status: 'deleted'
                            })

                            swal(
                                'Articulo eliminado',
                                'El articulo ha sido eliminado correctamente',
                                'success'
                            )
                        })
                } else {

                    swal(
                        'Tranquilo :)',
                        'No se ha eliminado ningun articulo.',
                    )
                }
            });
    }

    render() {

        if (this.state.status === 'deleted') {
            return <Redirect to="/blog" />
        }

        let article = this.state.article

        return (
            <div className="center">
                <section id="content">

                    {
                        article &&
                        <article className="article-item article-detail">
                            <div className="image-wrap">
                                {
                                    article.image !== null ? (
                                        <img src={this.url + 'get-image/' + article.image} alt={article.title} />
                                    ) : (
                                            <img src={ImageDefault} alt={article.title} />
                                        )
                                }
                            </div>
                            <h1 className="subheader">{article.title}</h1>
                            <span className="date">
                                <Moment locale="es" fromNow>{article.date}</Moment>
                            </span>
                            <p>
                                {article.content}
                            </p>

                            <hr></hr>

                            <Link to={'/blog/editar/' + article._id} className="btn btn-warning">Editar</Link>
                            <button onClick={
                                () => {
                                    this.deleteArticle(article._id)
                                }
                            } className="btn btn-danger">Eliminar</button>

                            <div className="clearfix"></div>
                        </article>
                    }

                    {
                        !article && this.state.status === 'success' &&
                        <div id="article">
                            <h2 className="subheader">El articulo no existe</h2>
                            <p>Intentalo nuevamente en un par de minutos o intenta realizar otra busqueda.</p>
                        </div>
                    }

                    {
                        this.state.status == null &&
                        <div id="article">
                            <h2 className="subheader">Cargando...</h2>
                            <p>Espere unos segundos.</p>
                        </div>
                    }

                </section>

                <Sidebar />

            </div>
        )
    }
}

export default Article