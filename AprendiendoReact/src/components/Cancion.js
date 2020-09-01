import React, { Component } from 'react'

class Cancion extends Component {

    marcar = () => {
        this.props.marcarFavorita(this.props.cancion, this.props.indice)
    }

    render() {

        const { titulo, image, artista, año } = this.props.cancion

        return (
            <article className="article-item" id="article-template">
                <div className="image-wrap">
                    <img src={image} alt={titulo} />
                </div>
                <h2>{titulo} - {artista}</h2>
                <span className="date">
                    {año}
                </span>
                <a href="article.html">Ver en Spotify</a>
                <button onClick={this.marcar}>
                    Solicitar en cola
                </button>
                <div className="clearfix"></div>
            </article>
        )

    }

}

export default Cancion