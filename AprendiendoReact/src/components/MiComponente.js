import React, { Component } from 'react'

class MiComponente extends Component {
    render() {

        let receta = {
            nombre: 'Hamburguesa',
            ingredientes: ['Carne', 'Bollos', 'Catsup'],
            precio: 80
        }

        return (
            <div>
                <h1>{receta.nombre}</h1>
                <ol>
                    {
                        receta.ingredientes.map((ingrediente, i) => {
                            return (
                                <li key={i}>{ingrediente}</li>
                            )
                        })
                    }
                </ol>
                {
                    this.props.saludo &&
                    <React.Fragment>
                        <h1>Desde una prop</h1>
                        <p>{this.props.saludo}</p>
                    </React.Fragment>
                }
                <hr></hr>
            </div>
        )
    }
}

export default MiComponente