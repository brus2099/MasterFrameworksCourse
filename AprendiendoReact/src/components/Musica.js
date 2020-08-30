import React, { Component } from 'react'
import Cancion from './Cancion'

class Musica extends Component {

    state = {

    }

    cambiarTitulo = () => {

        let { canciones } = this.state
        //let random = Math.floor(Math.random() * 3)
        canciones[0].titulo = 'Locket'

        this.setState({
            canciones: canciones
        })
    }

    favorita = (cancion, indice) => {
        console.log('la favorita')
        console.log(cancion, indice)
        this.setState({
            favorita: cancion
        })
    }

    componentWillMount() {
        //alert('se esta cargando el componente')

        this.setState({
            canciones: [
                {
                    titulo: 'Bones',
                    artista: 'Crumb',
                    año: 2018,
                    image: 'https://images.genius.com/fb1a49198c46034d0d8f313921ccd4d6.1000x1000x1.jpg'
                },
                {
                    titulo: 'Glory Box',
                    artista: 'Portishead',
                    año: 1994,
                    image: 'https://www.udiscovermusic.com/wp-content/uploads/2019/08/Portishead-Dummy-album-cover-820.jpg'
                },
                {
                    titulo: 'Paradise Circus',
                    artista: 'Massive Attack',
                    año: 2001,
                    image: 'https://img.discogs.com/8v0y-0hGshXc0RV8gmxkWWLFpwo=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2159106-1394874531-6379.jpeg.jpg'
                }
            ],
            nombre: 'Brus',
            favorita: {}
        })
    }

    componentDidMount() {
        //alert('ya esta cargado el componente')

    }

    componentWillUnmount() {
        //alert('me voy a quitar de la ejecucion')
    }

    render() {

        let pStyle = {
            background: 'green',
            color: 'white',
            padding: '10px'
        }

        return (
            <div id="content" className="musica">
                <h2 className="subheader">Música</h2>
                <p>Selección de las canciones favoritas de {this.state.nombre}</p>
                <button onClick={this.cambiarTitulo}>
                    Cambiar titulo de cancion 1
                </button>
                {
                    this.state.favorita.titulo ? (
                            <p style={pStyle}>Cancion favorita: {this.state.favorita.titulo}</p>
                        ) : (
                            <p>No hay cancion favorita</p>
                        )

                }
                <div id="articles" className="canciones">
                    {
                        this.state.canciones.map((cancion, i) => {
                            return (
                                <Cancion
                                    key={i}
                                    cancion={cancion}
                                    indice={i}
                                    marcarFavorita={this.favorita}
                                />
                            )
                        })
                    }
                </div>
            </div>
        )
    }

}

export default Musica