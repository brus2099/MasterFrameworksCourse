import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// Importar componentes
import MiComponente from './components/MiComponente'

// Componentes de la Maquetacion
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Blog from './components/Blog'
import Formulario from './components/Formulario'
import Musica from './components/Musica'
import Error from './components/Error'
import Search from './components/Search'
import Article from './components/Article'
import CreateArticle from './components/CreateArticle';
import EditArticle from './components/EditArticle';

class Router extends Component {

    render() {

        return (
            <BrowserRouter>
                <Header />


                {/* Configurar rutas y paginas*/}
                <Switch>

                    {/* Rutas utiles */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route exact path="/blog" component={Blog} />
                    <Route exact path="/blog/articulo/:id" component={Article}/>
                    <Route exact path="/blog/crear" component={CreateArticle}/>
                    <Route exact path="/blog/editar/:id" component={EditArticle}/>
                    <Route exact path="/blog/busqueda/:search" component={Search} />
                    <Route exact path="/redirect/:search" render={
                        props => {
                            let search = props.match.params.search
                            return (
                                <Redirect to={'/blog/busqueda/' + search} />
                            )

                        }
                    } />
                    <Route exact path="/formulario" component={Formulario} />
                    <Route exact path="/musica" component={Musica} />

                    {/* Rutas de puebas */}
                    <Route exact path="/pagina" render={() => (
                        <React.Fragment>
                            <h3 className="subheader">Pagina sin componente!!</h3>
                            <MiComponente saludo="Hola amigo" />
                        </React.Fragment>
                    )} />
                    <Route exact path="/pruebas/:nombre/:apellidos?" render={(props) => {

                        let nombre = props.match.params.nombre
                        let apellidos = props.match.params.apellidos

                        return (
                            <div id="content">
                                <h2 className="subheader">Pagina de Pruebas</h2>
                                <p>Dame dos parametros en la URL. Esto es opcional.</p>
                                {
                                    nombre && apellidos &&
                                    <p>El paramtetro es: {nombre + ' ' + apellidos}</p>
                                }
                                {
                                    nombre && !apellidos &&
                                    <p>El paramtetro es: {nombre}</p>
                                }
                            </div>
                        )
                    }
                    } />

                    <Route component={Error} />

                </Switch>



                <div className="clearfix"></div>
                <Footer />

            </BrowserRouter>
        )
    }
}

export default Router