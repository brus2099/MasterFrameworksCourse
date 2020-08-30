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
                <hr></hr>
            </div>
        )
    }
}

export default MiComponente