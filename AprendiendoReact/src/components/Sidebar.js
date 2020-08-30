import React, { Component } from 'react'

class Sidebar extends Component {

    render() {
        return (
            <aside id="sidebar">
                <div id="nav-blog" className="sidebar-item">
                    <h3>Cosas que puedes realizar</h3>
                    <a href="#" className="btn btn-success">Crear articulo</a>
                </div>
                <div id="search" className="sidebar-item">
                    <h3>Buscador</h3>
                    <p>Encuentra el articulo que buscas</p>
                    <form action="">
                        <input type="text" name="search" />
                        <input type="submit" name="submit" value="Buscar" className="btn" />
                    </form>
                </div>
            </aside>
        )
    }

}

export default Sidebar