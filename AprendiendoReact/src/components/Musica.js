import React, { Component } from 'react'
import Cancion from './Cancion'
import Sidebar from './Sidebar'

class Musica extends Component {

    state = {
        canciones: [
            {
                titulo: 'Bones',
                artista: 'Crumb',
                año: 2018,
                image: 'https://images.genius.com/fb1a49198c46034d0d8f313921ccd4d6.1000x1000x1.jpg'
            },
            {
                titulo: 'Losing You',
                artista: 'Boy Pablo',
                año: 2018,
                image: 'https://images-na.ssl-images-amazon.com/images/I/51NtTftxs9L._SL1200_.jpg'
            },
            {
                titulo: 'Glory Box',
                artista: 'Portishead',
                año: 1994,
                image: 'https://www.discovermusic.com/wp-content/uploads/2019/08/Portishead-Dummy-album-cover-820.jpg'
            },
            {
                titulo: 'Stunnin´',
                artista: 'Curtis Waters',
                año: 2015,
                image: 'https://pbs.twimg.com/media/Ea53AnQWoAAtoqK.jpg'
            },
            {
                titulo: 'Honeype',
                artista: 'Jawny',
                año: 2017,
                image: 'https://m.media-amazon.com/images/I/714tNbcRqIL._SS500_.jpg'
            }
        ],
        nombre: 'Brus',
        favorita: {}
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

    /*
    componentWillMount() {
        //alert('se esta cargando el componente')

        this.setState({
            
        })
    }
    */

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

            <React.Fragment>

                <div className="center">

                    <div id="content" className="musica">
                        <h2 className="subheader">Ultimas reproducciones</h2>
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
                </div>
                <Sidebar
                    blog="false"
                />
            </React.Fragment>
        )
    }

}

export default Musica