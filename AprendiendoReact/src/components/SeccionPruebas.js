import React, { Component } from 'react'
import MiComponente from './MiComponente'

class SeccionPruebas extends Component {

    contador = 0

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         contador: 0
    //     }
    // }

    state = {
        contador: 0
    }

    HolaMundo = (nombre, edad) => {

        // buena practica para insertar html en variables es ponerles parentesis
        let presentacion = (<div>
            <h2>Hola, mi nombre es {nombre}</h2>
            <h3>Tengo {edad}</h3>
        </div>)
        return presentacion
    }

    sumar = () => {
        //this.contador += 1
        //this.state.contador += 1;
        this.setState({
            contador: (this.state.contador + 1)
        })

    }

    restar = () => {
        //this.contador -= 1
        //this.state.contador += 1;
        this.setState({
            contador: (this.state.contador - 1)
        })
    }

    render() {

        let nombre = 'Brus'

        return (
            <section id="content">

                <h2 className="subheader">Ultimos articulos</h2>

                <p>Curso de React</p>

                <h2 className="subheader">Funciones y JSX basico</h2>
                {this.HolaMundo(nombre, 21)}

                <h2 className="subheader">Componentes</h2>
                <section className="componentes">
                    <MiComponente />
                    <MiComponente />
                </section>

                <h2 className="subheader">Estados de un componente</h2>
                <p>Contador: {this.state.contador}</p>
                <input type="button" value="Sumar" onClick={this.sumar}/>
                <input type="button" value="Restar"onClick={this.restar}/>

            </section>
        )
    }

}

export default SeccionPruebas